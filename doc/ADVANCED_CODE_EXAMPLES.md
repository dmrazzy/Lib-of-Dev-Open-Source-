# Advanced Code Examples - Schwierigste Hürden

Diese Datei enthält erweiterte Code-Beispiele für die komplexesten Teile der Projekt-Tutorials.

## 1. Real-Time Messenger - Socket.io Reconnection mit Exponential Backoff

### Problem: Verbindungsabbrüche und Message Loss
```javascript
// client/src/context/SocketContext.jsx - ADVANCED VERSION
import { createContext, useContext, useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [reconnectAttempt, setReconnectAttempt] = useState(0);
  const reconnectTimeoutRef = useRef(null);
  const messageQueueRef = useRef([]); // Store messages during disconnect

  useEffect(() => {
    // Socket.io with advanced reconnection configuration
    const newSocket = io('http://localhost:5000', {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity,
      timeout: 20000,
      transports: ['websocket', 'polling'], // Fallback to polling if websocket fails
    });

    // Connection event handlers
    newSocket.on('connect', () => {
      console.log('✅ Socket connected:', newSocket.id);
      setIsConnected(true);
      setReconnectAttempt(0);
      
      // Send queued messages after reconnection
      if (messageQueueRef.current.length > 0) {
        console.log('📤 Sending queued messages:', messageQueueRef.current.length);
        messageQueueRef.current.forEach(msg => {
          newSocket.emit(msg.event, msg.data);
        });
        messageQueueRef.current = [];
      }
    });

    newSocket.on('disconnect', (reason) => {
      console.log('❌ Socket disconnected:', reason);
      setIsConnected(false);
      
      // Auto-reconnect logic with exponential backoff
      if (reason === 'io server disconnect') {
        // Server initiated disconnect, manually reconnect with backoff
        const delay = Math.min(1000 * Math.pow(2, reconnectAttempt), 30000);
        console.log(`⏰ Reconnecting in ${delay}ms...`);
        
        reconnectTimeoutRef.current = setTimeout(() => {
          console.log('🔄 Attempting reconnection...');
          setReconnectAttempt(prev => prev + 1);
          newSocket.connect();
        }, delay);
      }
    });

    newSocket.on('connect_error', (error) => {
      console.error('Connection error:', error.message);
      setIsConnected(false);
    });

    newSocket.on('reconnect_attempt', (attemptNumber) => {
      console.log(`🔄 Reconnection attempt #${attemptNumber}`);
    });

    newSocket.on('reconnect_failed', () => {
      console.error('❌ All reconnection attempts failed');
    });

    newSocket.on('users:online', (users) => {
      setOnlineUsers(users);
    });

    setSocket(newSocket);

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      newSocket.close();
    };
  }, []);

  // Queue messages when offline to prevent loss
  const emitWithQueue = (event, data) => {
    if (isConnected && socket) {
      socket.emit(event, data);
    } else {
      console.log('📥 Queuing message for later:', event);
      messageQueueRef.current.push({ event, data, timestamp: Date.now() });
      
      // Optional: Show UI notification
      alert('You are offline. Message will be sent when connection is restored.');
    }
  };

  return (
    <SocketContext.Provider value={{ 
      socket, 
      onlineUsers, 
      isConnected, 
      reconnectAttempt,
      emitWithQueue 
    }}>
      {children}
    </SocketContext.Provider>
  );
};
```

### Server-Side Message Persistence
```javascript
// server/src/server.js - Message queuing for offline users
const pendingMessages = new Map(); // userId -> [messages]

socket.on('message:send', async (data) => {
  try {
    const { from, to, text } = data;
    
    // Save message to database
    const Message = require('./models/Message');
    const message = await Message.create({
      from,
      to,
      text,
      timestamp: new Date(),
      delivered: false,
    });

    // Send to recipient if online
    const recipientSocketId = onlineUsers.get(to);
    if (recipientSocketId) {
      io.to(recipientSocketId).emit('message:receive', {
        _id: message._id,
        from,
        text,
        timestamp: message.timestamp,
      });
      
      // Mark as delivered
      await Message.findByIdAndUpdate(message._id, { delivered: true });
    } else {
      // Queue message for when user comes online
      if (!pendingMessages.has(to)) {
        pendingMessages.set(to, []);
      }
      pendingMessages.get(to).push(message);
    }

    // Confirm to sender
    socket.emit('message:sent', {
      _id: message._id,
      to,
      text,
      timestamp: message.timestamp,
      delivered: !!recipientSocketId,
    });
  } catch (error) {
    socket.emit('message:error', { error: error.message });
  }
});

// When user comes online, send pending messages
socket.on('user:join', async (userId) => {
  onlineUsers.set(userId, socket.id);
  socket.userId = userId;
  
  // Send pending messages
  if (pendingMessages.has(userId)) {
    const messages = pendingMessages.get(userId);
    messages.forEach(msg => {
      socket.emit('message:receive', msg);
    });
    pendingMessages.delete(userId);
    
    // Mark messages as delivered
    const messageIds = messages.map(m => m._id);
    await Message.updateMany(
      { _id: { $in: messageIds } },
      { delivered: true }
    );
  }
  
  io.emit('users:online', Array.from(onlineUsers.keys()));
});
```

## 2. Multiplayer Game - Race Condition & State Synchronization

### Problem: Simultane Moves können zu inkonsistentem Game State führen

```javascript
// server/src/game/GameRoom.js - ADVANCED VERSION with conflict resolution
const { v4: uuidv4 } = require('uuid');
const GameLogic = require('./GameLogic');

class GameRoom {
  constructor(roomId, creator) {
    this.id = roomId || uuidv4();
    this.players = [
      { id: creator.id, name: creator.name, symbol: 'X', socketId: creator.socketId }
    ];
    this.spectators = [];
    this.board = Array(9).fill(null);
    this.currentTurn = 'X';
    this.status = 'waiting';
    this.winner = null;
    this.winningLine = [];
    this.createdAt = Date.now();
    this.moveHistory = []; // Track all moves
    this.pendingMoves = new Map(); // Handle race conditions
  }

  // Advanced: Handle simultaneous moves with conflict resolution
  makeMove(socketId, position, moveId = null, clientBoardState = null) {
    const player = this.players.find(p => p.socketId === socketId);
    
    if (!player || this.status !== 'playing') {
      return { success: false, error: 'Invalid game state' };
    }

    if (player.symbol !== this.currentTurn) {
      return { success: false, error: 'Not your turn' };
    }

    // CRITICAL: Verify board state matches client
    if (clientBoardState) {
      const mismatch = clientBoardState.some((cell, idx) => cell !== this.board[idx]);
      if (mismatch) {
        console.error('⚠️ Board state mismatch detected!');
        return { 
          success: false, 
          error: 'Board out of sync', 
          shouldSync: true,
          serverState: this.getState() 
        };
      }
    }

    if (!GameLogic.isValidMove(this.board, position)) {
      return { success: false, error: 'Invalid move' };
    }

    const move = {
      id: moveId || Date.now(),
      player: player.symbol,
      position,
      timestamp: Date.now(),
      boardStateBefore: [...this.board],
    };

    // Check for race condition: simultaneous moves within 100ms
    const recentMoves = this.moveHistory.filter(
      m => Math.abs(m.timestamp - move.timestamp) < 100 && m.player !== player.symbol
    );
    
    if (recentMoves.length > 0) {
      console.warn('⚠️ RACE CONDITION DETECTED: Simultaneous moves');
      
      // Resolve conflict using timestamp (earliest wins)
      const earliestMove = recentMoves.reduce((prev, curr) => 
        prev.timestamp < curr.timestamp ? prev : curr
      );
      
      if (earliestMove.timestamp < move.timestamp) {
        // Other player's move came first, reject this move
        console.log('❌ Rejecting move due to race condition');
        return { 
          success: false, 
          error: 'Move conflict - opponent moved first',
          shouldSync: true,
          serverState: this.getState(),
          conflictingMove: earliestMove
        };
      }
    }

    // Check for pending move at same position
    if (this.pendingMoves.has(position)) {
      const pendingMove = this.pendingMoves.get(position);
      if (pendingMove.timestamp < move.timestamp) {
        return {
          success: false,
          error: 'Position already being claimed',
          shouldSync: true,
        };
      }
    }

    // Mark position as pending
    this.pendingMoves.set(position, move);

    // Apply move
    this.board[position] = player.symbol;
    this.moveHistory.push(move);
    
    // Remove from pending
    setTimeout(() => this.pendingMoves.delete(position), 100);
    
    const result = GameLogic.checkWinner(this.board);
    
    if (result) {
      this.status = 'finished';
      this.winner = result.winner;
      this.winningLine = result.line;
    } else {
      this.currentTurn = this.currentTurn === 'X' ? 'O' : 'X';
    }

    return { 
      success: true, 
      result, 
      move,
      newState: this.getState() 
    };
  }

  // Verify and restore game state integrity
  verifyGameState(clientState) {
    const serverState = this.getState();
    
    // Check board integrity
    const boardsMatch = JSON.stringify(serverState.board) === 
                       JSON.stringify(clientState.board);
    
    // Check turn integrity
    const turnsMatch = serverState.currentTurn === clientState.currentTurn;
    
    if (!boardsMatch || !turnsMatch) {
      console.error('❌ Game state mismatch detected!');
      console.log('Server board:', serverState.board);
      console.log('Client board:', clientState.board);
      
      return { 
        valid: false, 
        serverState,
        differences: {
          board: !boardsMatch,
          turn: !turnsMatch
        }
      };
    }
    
    return { valid: true };
  }

  // Rollback to previous state if needed
  rollbackMove() {
    if (this.moveHistory.length === 0) return false;
    
    const lastMove = this.moveHistory.pop();
    this.board = lastMove.boardStateBefore;
    this.currentTurn = lastMove.player;
    this.status = 'playing';
    this.winner = null;
    this.winningLine = [];
    
    console.log('🔄 Move rolled back:', lastMove);
    return true;
  }
}

module.exports = GameRoom;
```

### Client-Side State Verification
```javascript
// client/src/hooks/useGame.js - ADVANCED VERSION
import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

export const useGame = () => {
  const [socket, setSocket] = useState(null);
  const [player, setPlayer] = useState(null);
  const [gameState, setGameState] = useState(null);
  const [error, setError] = useState(null);
  const lastMoveRef = useRef(null);
  const syncTimeoutRef = useRef(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    newSocket.on('game:moved', ({ state, move }) => {
      // Verify state consistency
      if (lastMoveRef.current && gameState) {
        const timeDiff = Date.now() - lastMoveRef.current.timestamp;
        
        if (timeDiff < 50) {
          console.warn('⚠️ Rapid state change detected, verifying...');
          
          // Request state verification
          newSocket.emit('game:verify', {
            roomId: gameState.id,
            clientState: gameState
          });
        }
      }
      
      setGameState(state);
      lastMoveRef.current = move;
    });

    // Handle sync requests from server
    newSocket.on('game:sync', ({ serverState, reason }) => {
      console.log('🔄 Syncing game state:', reason);
      setGameState(serverState);
      setError(`Game state synchronized: ${reason}`);
      
      // Clear error after 3 seconds
      setTimeout(() => setError(null), 3000);
    });

    // Periodic state verification (every 5 seconds during active game)
    const verifyInterval = setInterval(() => {
      if (gameState && gameState.status === 'playing') {
        newSocket.emit('game:verify', {
          roomId: gameState.id,
          clientState: gameState
        });
      }
    }, 5000);

    return () => {
      clearInterval(verifyInterval);
      newSocket.close();
    };
  }, [gameState]);

  const makeMove = (position) => {
    if (!gameState || !socket) return;
    
    const moveId = Date.now();
    lastMoveRef.current = { position, timestamp: moveId };
    
    // Send move with current board state for verification
    socket.emit('game:move', { 
      roomId: gameState.id, 
      position,
      moveId,
      clientBoardState: gameState.board 
    });
  };

  return {
    player,
    gameState,
    error,
    makeMove,
    // ... other methods
  };
};
```

## 3. Home Server - Docker Compose mit Advanced Networking

### Problem: Service Discovery und Inter-Container Communication

```yaml
# docker-compose-advanced.yml
version: '3.8'

services:
  # Nginx Reverse Proxy
  nginx-proxy:
    image: 'jc21/nginx-proxy-manager:latest'
    container_name: nginx-proxy
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./nginx-proxy/data:/data
      - ./nginx-proxy/letsencrypt:/etc/letsencrypt
    environment:
      DB_SQLITE_FILE: "/data/database.sqlite"
    networks:
      - frontend
      - backend
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:81"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    labels:
      - "com.centurylinklabs.watchtower.enable=true"

  # MariaDB with optimized configuration
  mariadb:
    image: mariadb:10
    container_name: mariadb
    restart: unless-stopped
    command: >
      --transaction-isolation=READ-COMMITTED
      --binlog-format=ROW
      --innodb-file-per-table=1
      --skip-innodb-read-only-compressed
      --max-connections=200
      --max-allowed-packet=256M
    volumes:
      - ./mariadb/data:/var/lib/mysql
      - ./mariadb/config:/etc/mysql/conf.d
    environment:
      MYSQL_ROOT_PASSWORD_FILE: /run/secrets/mysql_root_password
      MYSQL_DATABASE: nextcloud
      MYSQL_USER: nextcloud
      MYSQL_PASSWORD_FILE: /run/secrets/mysql_password
    secrets:
      - mysql_root_password
      - mysql_password
    networks:
      - backend
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 30s
      timeout: 10s
      retries: 5

  # Redis for caching and session management
  redis:
    image: redis:alpine
    container_name: redis
    restart: unless-stopped
    command: >
      redis-server
      --appendonly yes
      --requirepass ${REDIS_PASSWORD}
      --maxmemory 512mb
      --maxmemory-policy allkeys-lru
    volumes:
      - ./redis/data:/data
    networks:
      - backend
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 30s
      timeout: 3s
      retries: 5

  # Nextcloud with Redis caching
  nextcloud:
    image: nextcloud:latest
    container_name: nextcloud
    restart: unless-stopped
    volumes:
      - ./nextcloud/html:/var/www/html
      - ./nextcloud/data:/var/www/html/data
      - ./nextcloud/config:/var/www/html/config
    environment:
      MYSQL_HOST: mariadb
      MYSQL_DATABASE: nextcloud
      MYSQL_USER: nextcloud
      MYSQL_PASSWORD_FILE: /run/secrets/mysql_password
      REDIS_HOST: redis
      REDIS_HOST_PASSWORD: ${REDIS_PASSWORD}
      NEXTCLOUD_TRUSTED_DOMAINS: cloud.yourdomain.com
      OVERWRITEPROTOCOL: https
      TRUSTED_PROXIES: nginx-proxy
      PHP_MEMORY_LIMIT: 2G
      PHP_UPLOAD_LIMIT: 10G
    secrets:
      - mysql_password
    depends_on:
      mariadb:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - backend
      - frontend
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/status.php"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Traefik load balancer (alternative to nginx)
  traefik:
    image: traefik:v2.10
    container_name: traefik
    restart: unless-stopped
    command:
      - "--api.dashboard=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.letsencrypt.acme.tlschallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.email=admin@yourdomain.com"
      - "--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json"
    ports:
      - "8080:8080"  # Dashboard
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./traefik/letsencrypt:/letsencrypt
    networks:
      - frontend
      - backend
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.dashboard.rule=Host(`traefik.yourdomain.com`)"
      - "traefik.http.routers.dashboard.service=api@internal"

networks:
  frontend:
    name: homeserver-frontend
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: 172.20.0.0/16
          gateway: 172.20.0.1
  
  backend:
    name: homeserver-backend
    driver: bridge
    internal: true  # Isolated from internet access
    ipam:
      driver: default
      config:
        - subnet: 172.21.0.0/16
          gateway: 172.21.0.1

secrets:
  mysql_root_password:
    file: ./secrets/mysql_root_password.txt
  mysql_password:
    file: ./secrets/mysql_password.txt

volumes:
  mariadb_data:
    driver: local
  nextcloud_data:
    driver: local
  redis_data:
    driver: local
```

### Advanced Service Discovery Script
```bash
#!/bin/bash
# check-services.sh - Verify all services are communicating correctly

echo "🔍 Checking service connectivity..."

# Check if Redis is accessible from Nextcloud
docker exec nextcloud redis-cli -h redis -a $REDIS_PASSWORD ping
if [ $? -eq 0 ]; then
  echo "✅ Nextcloud → Redis: OK"
else
  echo "❌ Nextcloud → Redis: FAILED"
fi

# Check if MariaDB is accessible from Nextcloud
docker exec nextcloud mysql -h mariadb -u nextcloud -p$MYSQL_PASSWORD -e "SELECT 1"
if [ $? -eq 0 ]; then
  echo "✅ Nextcloud → MariaDB: OK"
else
  echo "❌ Nextcloud → MariaDB: FAILED"
fi

# Check DNS resolution between containers
echo "📡 Testing DNS resolution..."
docker exec nextcloud ping -c 1 mariadb > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "✅ DNS: Nextcloud can resolve mariadb"
else
  echo "❌ DNS: Nextcloud cannot resolve mariadb"
fi

# Check network isolation
echo "🔒 Checking backend network isolation..."
docker exec nextcloud ping -c 1 8.8.8.8 > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "⚠️  WARNING: Backend has internet access (should be isolated)"
else
  echo "✅ Backend network properly isolated"
fi

echo "✅ Service connectivity check complete!"
```

## 4. Cross-Platform App - Native Module Bridges

### Problem: Platform-specific Features mit einheitlicher API

```javascript
// src/services/PlatformBridge.js
import { Platform, PermissionsAndroid } from 'react-native';

class PlatformBridge {
  constructor() {
    this.platform = Platform.OS;
    this.isWeb = Platform.OS === 'web';
    this.isMobile = ['ios', 'android'].includes(Platform.OS);
    this.isDesktop = ['windows', 'macos'].includes(Platform.OS);
  }

  // Unified notification API across all platforms
  async requestNotificationPermission() {
    try {
      if (this.platform === 'android') {
        // Android 13+ requires runtime permission
        if (Platform.Version >= 33) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            {
              title: 'Notification Permission',
              message: 'Allow notifications for todo reminders',
              buttonPositive: 'Allow',
              buttonNegative: 'Deny',
            }
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return true; // Older Android doesn't need permission
      }
      
      if (this.platform === 'ios') {
        const PushNotificationIOS = require('@react-native-community/push-notification-ios').default;
        const permissions = await PushNotificationIOS.requestPermissions({
          alert: true,
          badge: true,
          sound: true,
        });
        return permissions.alert;
      }
      
      if (this.isWeb) {
        if (!('Notification' in window)) {
          console.warn('This browser does not support notifications');
          return false;
        }
        
        const permission = await Notification.requestPermission();
        return permission === 'granted';
      }
      
      if (this.isDesktop && window.electron) {
        // Electron has notifications enabled by default
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Permission request failed:', error);
      return false;
    }
  }

  // Send notification with platform-specific implementation
  async sendNotification(title, body, data = {}) {
    try {
      if (this.isMobile) {
        const PushNotification = require('react-native-push-notification').default;
        PushNotification.localNotification({
          channelId: 'todo-app',
          title,
          message: body,
          userInfo: data,
          playSound: true,
          soundName: 'default',
        });
      } else if (this.isWeb) {
        if (Notification.permission === 'granted') {
          new Notification(title, {
            body,
            icon: '/icon-192.png',
            badge: '/badge.png',
            data,
          });
        }
      } else if (this.isDesktop && window.electron) {
        window.electron.sendNotification(title, body, data);
      }
    } catch (error) {
      console.error('Failed to send notification:', error);
    }
  }

  // File system operations with platform-specific handling
  async saveFile(filename, content, mimeType = 'application/json') {
    try {
      if (this.isWeb) {
        // Web: Download as file
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        return { success: true, path: 'downloaded' };
      }
      
      if (this.isMobile) {
        const RNFS = require('react-native-fs');
        const { Share } = require('react-native');
        
        // Save to documents directory
        const path = `${RNFS.DocumentDirectoryPath}/${filename}`;
        await RNFS.writeFile(path, content, 'utf8');
        
        // Offer to share
        await Share.share({
          title: `Share ${filename}`,
          url: Platform.OS === 'ios' ? `file://${path}` : path,
          message: Platform.OS === 'android' ? content : undefined,
        });
        
        return { success: true, path };
      }
      
      if (this.isDesktop && window.electron) {
        const path = await window.electron.saveFileDialog(filename, content);
        return { success: !!path, path };
      }
      
      throw new Error('File saving not supported on this platform');
    } catch (error) {
      console.error('Failed to save file:', error);
      return { success: false, error: error.message };
    }
  }

  // Read file with platform-specific handling
  async readFile(uri) {
    try {
      if (this.isWeb) {
        // Web: Use File API
        return new Promise((resolve, reject) => {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = '.json,.txt';
          
          input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            
            reader.onload = (event) => {
              resolve(event.target.result);
            };
            
            reader.onerror = (error) => {
              reject(error);
            };
            
            reader.readAsText(file);
          };
          
          input.click();
        });
      }
      
      if (this.isMobile) {
        const RNFS = require('react-native-fs');
        const DocumentPicker = require('react-native-document-picker').default;
        
        const result = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
        
        const content = await RNFS.readFile(result[0].uri, 'utf8');
        return content;
      }
      
      if (this.isDesktop && window.electron) {
        const content = await window.electron.readFileDialog();
        return content;
      }
      
      throw new Error('File reading not supported on this platform');
    } catch (error) {
      if (error.code !== 'DOCUMENT_PICKER_CANCELED') {
        console.error('Failed to read file:', error);
      }
      throw error;
    }
  }

  // Haptic feedback (mobile only)
  async triggerHaptic(type = 'impactMedium') {
    if (!this.isMobile) return;
    
    try {
      if (this.platform === 'ios') {
        const ReactNativeHapticFeedback = require('react-native-haptic-feedback').default;
        ReactNativeHapticFeedback.trigger(type);
      } else if (this.platform === 'android') {
        const { Vibration } = require('react-native');
        
        const patterns = {
          impactLight: [0, 10],
          impactMedium: [0, 20],
          impactHeavy: [0, 30],
          notificationSuccess: [0, 10, 50, 10],
          notificationWarning: [0, 20, 50, 20],
          notificationError: [0, 30, 50, 30, 50, 30],
        };
        
        Vibration.vibrate(patterns[type] || patterns.impactMedium);
      }
    } catch (error) {
      console.error('Haptic feedback failed:', error);
    }
  }

  // Clipboard operations
  async copyToClipboard(text) {
    try {
      if (this.isWeb) {
        await navigator.clipboard.writeText(text);
      } else {
        const Clipboard = require('@react-native-clipboard/clipboard').default;
        Clipboard.setString(text);
      }
      
      await this.triggerHaptic('impactLight');
      return true;
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      return false;
    }
  }

  async getFromClipboard() {
    try {
      if (this.isWeb) {
        return await navigator.clipboard.readText();
      } else {
        const Clipboard = require('@react-native-clipboard/clipboard').default;
        return await Clipboard.getString();
      }
    } catch (error) {
      console.error('Failed to read from clipboard:', error);
      return '';
    }
  }
}

export default new PlatformBridge();
```

### Electron Preload Script für Desktop-spezifische Features
```javascript
// electron/preload.js
const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs').promises;
const { dialog } = require('electron').remote;

// Expose protected methods that allow the renderer process to use
// ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electron', {
  // Notification API
  sendNotification: (title, body, data) => {
    ipcRenderer.send('show-notification', { title, body, data });
  },

  // File operations
  saveFileDialog: async (defaultFilename, content) => {
    const { filePath } = await ipcRenderer.invoke('save-file-dialog', defaultFilename);
    if (filePath) {
      await fs.writeFile(filePath, content, 'utf8');
      return filePath;
    }
    return null;
  },

  readFileDialog: async () => {
    const { filePaths } = await ipcRenderer.invoke('open-file-dialog');
    if (filePaths && filePaths.length > 0) {
      const content = await fs.readFile(filePaths[0], 'utf8');
      return content;
    }
    return null;
  },

  // System tray integration
  setTrayIcon: (iconPath) => {
    ipcRenderer.send('set-tray-icon', iconPath);
  },

  // Window controls
  minimizeWindow: () => {
    ipcRenderer.send('minimize-window');
  },

  maximizeWindow: () => {
    ipcRenderer.send('maximize-window');
  },

  closeWindow: () => {
    ipcRenderer.send('close-window');
  },

  // Auto-launch on startup
  setAutoLaunch: (enabled) => {
    ipcRenderer.send('set-auto-launch', enabled);
  },

  // Get app version
  getAppVersion: () => {
    return ipcRenderer.invoke('get-app-version');
  },
});
```

Diese erweiterten Code-Beispiele zeigen die komplexesten Herausforderungen und deren Lösungen in jedem Projekt!
