// Specialized Topics: IoT, E-commerce, Linux, Home Automation, and more

export const specializedTopics = {
  iot: {
    id: 'iot',
    name: 'IoT & Hardware',
    icon: '🔌',
    color: '#059669',
    description: 'Internet of Things, embedded systems, and hardware programming',
    categories: {
      esp: {
        name: 'ESP32 & ESP8266',
        items: [
          {
            title: 'ESP32 Basic Setup',
            code: `#include <WiFi.h>

const char* ssid = "your-SSID";
const char* password = "your-password";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("Connected to WiFi");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Your code here
}`,
            description: 'Connect ESP32 to WiFi network',
            usage: 'Use Arduino IDE with ESP32 board support. Essential for IoT projects.',
            technologies: ['ESP32', 'Arduino', 'C++', 'WiFi'],
          },
          {
            title: 'ESP32 Web Server',
            code: `#include <WiFi.h>
#include <WebServer.h>

WebServer server(80);

void handleRoot() {
  server.send(200, "text/html", "<h1>ESP32 Web Server</h1>");
}

void setup() {
  WiFi.begin("SSID", "password");
  server.on("/", handleRoot);
  server.begin();
}

void loop() {
  server.handleClient();
}`,
            description: 'Create a web server on ESP32 to control devices',
            usage: 'Access from browser using ESP32 IP address. Great for home automation control panels.',
            technologies: ['ESP32', 'HTTP', 'Web Server'],
          },
          {
            title: 'ESP32 MQTT Publishing',
            code: `#include <WiFi.h>
#include <PubSubClient.h>

WiFiClient espClient;
PubSubClient client(espClient);

const char* mqtt_server = "broker.hivemq.com";

void setup() {
  WiFi.begin("SSID", "password");
  client.setServer(mqtt_server, 1883);
}

void loop() {
  if (!client.connected()) {
    client.connect("ESP32Client");
  }
  
  float temperature = 25.5; // Your sensor reading
  String msg = String(temperature);
  client.publish("home/temperature", msg.c_str());
  
  delay(5000);
}`,
            description: 'Publish sensor data via MQTT protocol',
            usage: 'MQTT is the standard for IoT communication. Efficient and reliable.',
            technologies: ['MQTT', 'PubSubClient', 'IoT'],
          },
        ],
      },
      raspberryPi: {
        name: 'Raspberry Pi',
        items: [
          {
            title: 'GPIO Control with Python',
            code: `import RPi.GPIO as GPIO
import time

# Set up GPIO pins
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)

try:
    while True:
        GPIO.output(18, GPIO.HIGH)  # Turn on
        time.sleep(1)
        GPIO.output(18, GPIO.LOW)   # Turn off
        time.sleep(1)
except KeyboardInterrupt:
    GPIO.cleanup()`,
            description: 'Control GPIO pins on Raspberry Pi',
            usage: 'Control LEDs, relays, motors. Foundation of Pi hardware projects.',
            technologies: ['Python', 'GPIO', 'Raspberry Pi'],
          },
          {
            title: 'Pi Camera Module',
            code: `from picamera import PiCamera
from time import sleep

camera = PiCamera()
camera.resolution = (1920, 1080)

# Take photo
camera.start_preview()
sleep(2)
camera.capture('/home/pi/image.jpg')
camera.stop_preview()

# Record video
camera.start_recording('/home/pi/video.h264')
sleep(10)
camera.stop_recording()`,
            description: 'Use Raspberry Pi Camera for photos and videos',
            usage: 'Perfect for security cameras, time-lapse, and computer vision projects.',
            technologies: ['PiCamera', 'OpenCV', 'Python'],
          },
          {
            title: 'Pi as Web Server',
            code: `from flask import Flask, render_template
import RPi.GPIO as GPIO

app = Flask(__name__)
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/on')
def led_on():
    GPIO.output(18, GPIO.HIGH)
    return 'LED ON'

@app.route('/off')
def led_off():
    GPIO.output(18, GPIO.LOW)
    return 'LED OFF'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)`,
            description: 'Control Pi GPIO from web browser',
            usage: 'Create web-based control panels for home automation.',
            technologies: ['Flask', 'Python', 'Web Server'],
          },
        ],
      },
      arduino: {
        name: 'Arduino',
        items: [
          {
            title: 'Arduino Blink LED',
            code: `void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`,
            description: 'Classic Arduino first program - blink an LED',
            usage: 'Learn basics of digital output. Gateway to Arduino programming.',
            technologies: ['Arduino', 'C++'],
          },
          {
            title: 'Read Analog Sensor',
            code: `void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);
  float voltage = sensorValue * (5.0 / 1023.0);
  
  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print(" Voltage: ");
  Serial.println(voltage);
  
  delay(1000);
}`,
            description: 'Read analog sensors (temperature, light, potentiometer)',
            usage: 'Foundation for sensor projects. Can read any 0-5V analog signal.',
            technologies: ['Arduino', 'Sensors', 'ADC'],
          },
          {
            title: 'Arduino Serial Communication',
            code: `void setup() {
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    char command = Serial.read();
    
    if (command == '1') {
      digitalWrite(LED_BUILTIN, HIGH);
      Serial.println("LED ON");
    } else if (command == '0') {
      digitalWrite(LED_BUILTIN, LOW);
      Serial.println("LED OFF");
    }
  }
}`,
            description: 'Control Arduino from computer via serial port',
            usage: 'Interface with Processing, Python, or any serial monitor.',
            technologies: ['Serial', 'UART', 'Communication'],
          },
        ],
      },
      sensors: {
        name: 'Sensors & Components',
        items: [
          {
            title: 'DHT22 Temperature Sensor',
            code: `#include <DHT.h>

#define DHTPIN 2
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  
  Serial.print("Temp: ");
  Serial.print(temperature);
  Serial.print("°C  Humidity: ");
  Serial.print(humidity);
  Serial.println("%");
  
  delay(2000);
}`,
            description: 'Read temperature and humidity with DHT22 sensor',
            usage: 'Popular sensor for weather stations and home automation.',
            technologies: ['DHT22', 'Temperature', 'Humidity'],
          },
          {
            title: 'Ultrasonic Distance Sensor',
            code: `const int trigPin = 9;
const int echoPin = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duration = pulseIn(echoPin, HIGH);
  int distance = duration * 0.034 / 2;
  
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  delay(100);
}`,
            description: 'Measure distance using HC-SR04 ultrasonic sensor',
            usage: 'Perfect for obstacle avoidance, parking sensors, liquid level detection.',
            technologies: ['HC-SR04', 'Ultrasonic', 'Distance'],
          },
          {
            title: 'PIR Motion Sensor',
            code: `const int pirPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int motionDetected = digitalRead(pirPin);
  
  if (motionDetected == HIGH) {
    digitalWrite(ledPin, HIGH);
    Serial.println("Motion detected!");
  } else {
    digitalWrite(ledPin, LOW);
  }
  
  delay(100);
}`,
            description: 'Detect motion using PIR (Passive Infrared) sensor',
            usage: 'Ideal for security systems, automatic lighting, occupancy detection.',
            technologies: ['PIR', 'Motion Detection', 'Arduino'],
          },
          {
            title: 'BMP280 Pressure Sensor',
            code: `#include <Wire.h>
#include <Adafruit_BMP280.h>

Adafruit_BMP280 bmp;

void setup() {
  Serial.begin(9600);
  
  if (!bmp.begin(0x76)) {
    Serial.println("BMP280 not found!");
    while (1);
  }
}

void loop() {
  float temperature = bmp.readTemperature();
  float pressure = bmp.readPressure() / 100.0; // hPa
  float altitude = bmp.readAltitude(1013.25);  // Sea level pressure
  
  Serial.print("Temp: ");
  Serial.print(temperature);
  Serial.print("°C  Pressure: ");
  Serial.print(pressure);
  Serial.print(" hPa  Altitude: ");
  Serial.print(altitude);
  Serial.println(" m");
  
  delay(2000);
}`,
            description: 'Read temperature, pressure, and altitude from BMP280 sensor',
            usage: 'Weather stations, altitude tracking, indoor air quality monitoring.',
            technologies: ['BMP280', 'I2C', 'Pressure', 'Altitude'],
          },
          {
            title: 'Soil Moisture Sensor',
            code: `const int moisturePin = A0;
const int pumpPin = 8;

void setup() {
  Serial.begin(9600);
  pinMode(pumpPin, OUTPUT);
  digitalWrite(pumpPin, LOW);
}

void loop() {
  int moistureLevel = analogRead(moisturePin);
  int moisturePercent = map(moistureLevel, 0, 1023, 0, 100);
  
  Serial.print("Moisture: ");
  Serial.print(moisturePercent);
  Serial.println("%");
  
  // Auto-water if soil is too dry
  if (moisturePercent < 30) {
    digitalWrite(pumpPin, HIGH);
    Serial.println("Watering plant...");
    delay(5000);
    digitalWrite(pumpPin, LOW);
  }
  
  delay(10000);
}`,
            description: 'Monitor soil moisture and auto-water plants',
            usage: 'Smart garden automation, greenhouse monitoring, plant care systems.',
            technologies: ['Soil Moisture', 'Arduino', 'Automation'],
          },
          {
            title: 'Gas Sensor (MQ-2)',
            code: `const int gasPin = A0;
const int buzzerPin = 9;
const int threshold = 400;

void setup() {
  Serial.begin(9600);
  pinMode(buzzerPin, OUTPUT);
  
  Serial.println("MQ-2 Gas Sensor warming up...");
  delay(20000); // Warm-up time
  Serial.println("Ready!");
}

void loop() {
  int gasLevel = analogRead(gasPin);
  
  Serial.print("Gas Level: ");
  Serial.println(gasLevel);
  
  if (gasLevel > threshold) {
    digitalWrite(buzzerPin, HIGH);
    Serial.println("⚠️ GAS DETECTED!");
  } else {
    digitalWrite(buzzerPin, LOW);
  }
  
  delay(1000);
}`,
            description: 'Detect smoke, LPG, methane, and other gases',
            usage: 'Safety systems, air quality monitoring, leak detection.',
            technologies: ['MQ-2', 'Gas Detection', 'Safety'],
          },
        ],
      },
      actuators: {
        name: 'Actuators & Controls',
        items: [
          {
            title: 'Servo Motor Control',
            code: `#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9);
  Serial.begin(9600);
}

void loop() {
  // Sweep from 0 to 180 degrees
  for (int pos = 0; pos <= 180; pos++) {
    myServo.write(pos);
    Serial.print("Position: ");
    Serial.println(pos);
    delay(15);
  }
  
  // Sweep back from 180 to 0 degrees
  for (int pos = 180; pos >= 0; pos--) {
    myServo.write(pos);
    Serial.print("Position: ");
    Serial.println(pos);
    delay(15);
  }
}`,
            description: 'Control servo motor position with precise angles',
            usage: 'Robot arms, camera gimbals, door locks, automated blinds.',
            technologies: ['Servo', 'PWM', 'Motor Control'],
          },
          {
            title: 'Relay Module Control',
            code: `const int relay1 = 7;
const int relay2 = 8;

void setup() {
  pinMode(relay1, OUTPUT);
  pinMode(relay2, OUTPUT);
  Serial.begin(9600);
  
  // Ensure relays start OFF
  digitalWrite(relay1, LOW);
  digitalWrite(relay2, LOW);
}

void loop() {
  // Turn on Relay 1 (e.g., light)
  digitalWrite(relay1, HIGH);
  Serial.println("Relay 1 ON");
  delay(2000);
  
  // Turn on Relay 2 (e.g., fan)
  digitalWrite(relay2, HIGH);
  Serial.println("Relay 2 ON");
  delay(2000);
  
  // Turn off both
  digitalWrite(relay1, LOW);
  digitalWrite(relay2, LOW);
  Serial.println("Both OFF");
  delay(2000);
}`,
            description: 'Control high-voltage devices with relay modules',
            usage: 'Home automation, switching lights, fans, pumps, appliances.',
            technologies: ['Relay', 'AC Control', 'High Voltage'],
          },
          {
            title: 'Stepper Motor Control',
            code: `#include <Stepper.h>

const int stepsPerRevolution = 200;
Stepper myStepper(stepsPerRevolution, 8, 9, 10, 11);

void setup() {
  myStepper.setSpeed(60); // RPM
  Serial.begin(9600);
}

void loop() {
  Serial.println("Rotating clockwise...");
  myStepper.step(stepsPerRevolution);
  delay(1000);
  
  Serial.println("Rotating counter-clockwise...");
  myStepper.step(-stepsPerRevolution);
  delay(1000);
}`,
            description: 'Precise control of stepper motors for accurate positioning',
            usage: '3D printers, CNC machines, automated curtains, linear actuators.',
            technologies: ['Stepper Motor', '28BYJ-48', 'Precision Control'],
          },
          {
            title: 'LCD Display (16x2)',
            code: `#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  lcd.begin(16, 2);
  lcd.print("Hello, World!");
}

void loop() {
  lcd.setCursor(0, 1);
  lcd.print("Time: ");
  lcd.print(millis() / 1000);
  lcd.print("s  ");
  delay(1000);
}`,
            description: 'Display text on 16x2 LCD screen',
            usage: 'Status displays, sensor readings, user interfaces for IoT devices.',
            technologies: ['LCD', '16x2', 'Display'],
          },
          {
            title: 'RGB LED Control',
            code: `const int redPin = 9;
const int greenPin = 10;
const int bluePin = 11;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
}

void setColor(int red, int green, int blue) {
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);
}

void loop() {
  // Red
  setColor(255, 0, 0);
  delay(1000);
  
  // Green
  setColor(0, 255, 0);
  delay(1000);
  
  // Blue
  setColor(0, 0, 255);
  delay(1000);
  
  // Yellow
  setColor(255, 255, 0);
  delay(1000);
  
  // Cyan
  setColor(0, 255, 255);
  delay(1000);
  
  // Magenta
  setColor(255, 0, 255);
  delay(1000);
  
  // White
  setColor(255, 255, 255);
  delay(1000);
}`,
            description: 'Control RGB LED colors with PWM signals',
            usage: 'Mood lighting, status indicators, decorative lighting, alerts.',
            technologies: ['RGB LED', 'PWM', 'Color Mixing'],
          },
        ],
      },
    },
  },

  homeAssistant: {
    id: 'home-assistant',
    name: 'Home Assistant',
    icon: '🏠',
    color: '#41BDF5',
    description: 'Open-source home automation platform',
    categories: {
      basics: {
        name: 'Getting Started',
        items: [
          {
            title: 'Home Assistant Configuration',
            code: `# configuration.yaml
homeassistant:
  name: Home
  latitude: 40.7128
  longitude: -74.0060
  time_zone: America/New_York
  unit_system: metric

# Enable frontend
frontend:

# Enable automation UI
automation: !include automations.yaml

# Text to speech
tts:
  - platform: google_translate`,
            description: 'Basic Home Assistant configuration',
            usage: 'Edit configuration.yaml to customize your Home Assistant installation.',
            technologies: ['YAML', 'Home Assistant', 'Configuration'],
          },
          {
            title: 'Simple Automation',
            code: `# automations.yaml
- alias: 'Turn on lights at sunset'
  trigger:
    platform: sun
    event: sunset
  action:
    service: light.turn_on
    entity_id: light.living_room

- alias: 'Turn off lights at bedtime'
  trigger:
    platform: time
    at: '23:00:00'
  action:
    service: light.turn_off
    entity_id: all`,
            description: 'Create time-based automations',
            usage: 'Automate lights, devices, and scenes based on time or sun position.',
            technologies: ['Automation', 'YAML', 'Triggers'],
          },
          {
            title: 'ESP Home Integration',
            code: `# esphome-device.yaml
esphome:
  name: bedroom-sensor
  platform: ESP32
  board: nodemcu-32s

wifi:
  ssid: "YourWiFi"
  password: "password"

api:
  encryption:
    key: "your-key"

sensor:
  - platform: dht
    pin: GPIO4
    temperature:
      name: "Bedroom Temperature"
    humidity:
      name: "Bedroom Humidity"
    update_interval: 60s`,
            description: 'Configure ESP devices for Home Assistant',
            usage: 'ESPHome makes ESP32/ESP8266 devices work seamlessly with Home Assistant.',
            technologies: ['ESPHome', 'ESP32', 'MQTT'],
          },
        ],
      },
      integrations: {
        name: 'Integrations',
        items: [
          {
            title: 'MQTT Sensor',
            code: `# configuration.yaml
mqtt:
  broker: localhost
  port: 1883
  username: user
  password: pass

sensor:
  - platform: mqtt
    name: "Living Room Temperature"
    state_topic: "home/living/temperature"
    unit_of_measurement: "°C"`,
            description: 'Integrate MQTT sensors into Home Assistant',
            usage: 'MQTT is the standard protocol for IoT devices. Very flexible.',
            technologies: ['MQTT', 'Sensors', 'Integration'],
          },
        ],
      },
      automations: {
        name: 'Advanced Automations',
        items: [
          {
            title: 'Motion-Activated Lighting',
            code: `# automations.yaml
- alias: 'Motion Lights - Living Room'
  trigger:
    - platform: state
      entity_id: binary_sensor.living_room_motion
      to: 'on'
  condition:
    - condition: sun
      after: sunset
      before: sunrise
  action:
    - service: light.turn_on
      target:
        entity_id: light.living_room
      data:
        brightness: 255
        transition: 1
    - delay: '00:05:00'
    - service: light.turn_off
      target:
        entity_id: light.living_room
      data:
        transition: 5`,
            description: 'Turn on lights when motion detected at night',
            usage: 'Energy-efficient automatic lighting with motion sensors.',
            technologies: ['Motion Detection', 'Automation', 'Lighting'],
          },
          {
            title: 'Temperature-Based Climate Control',
            code: `# automations.yaml
- alias: 'Climate Control - Too Hot'
  trigger:
    - platform: numeric_state
      entity_id: sensor.living_room_temperature
      above: 26
  action:
    - service: climate.set_temperature
      target:
        entity_id: climate.ac_living_room
      data:
        temperature: 22
    - service: notify.mobile_app
      data:
        message: "AC turned on - temperature above 26°C"

- alias: 'Climate Control - Too Cold'
  trigger:
    - platform: numeric_state
      entity_id: sensor.living_room_temperature
      below: 18
  action:
    - service: climate.set_temperature
      target:
        entity_id: climate.heater_living_room
      data:
        temperature: 21`,
            description: 'Automatically control heating/cooling based on temperature',
            usage: 'Smart climate control for comfort and energy efficiency.',
            technologies: ['Climate', 'Temperature', 'HVAC'],
          },
          {
            title: 'Door/Window Alert System',
            code: `# automations.yaml
- alias: 'Security Alert - Door Open'
  trigger:
    - platform: state
      entity_id: binary_sensor.front_door
      to: 'on'
  condition:
    - condition: state
      entity_id: alarm_control_panel.home_alarm
      state: 'armed_away'
  action:
    - service: notify.mobile_app
      data:
        message: "⚠️ Front door opened while alarm armed!"
        title: "Security Alert"
    - service: light.turn_on
      target:
        entity_id: light.all_lights
      data:
        flash: long
    - service: alarm_control_panel.alarm_trigger
      target:
        entity_id: alarm_control_panel.home_alarm`,
            description: 'Alert when doors/windows open while alarm is armed',
            usage: 'Home security monitoring and intrusion detection.',
            technologies: ['Security', 'Notifications', 'Alarm'],
          },
          {
            title: 'Plant Watering Reminder',
            code: `# automations.yaml
- alias: 'Plant Watering Reminder'
  trigger:
    - platform: numeric_state
      entity_id: sensor.plant_moisture
      below: 20
      for:
        hours: 2
  action:
    - service: notify.mobile_app
      data:
        message: "🌱 Your plants need watering! Moisture: {{ states('sensor.plant_moisture') }}%"
        title: "Plant Care"
    - service: switch.turn_on
      target:
        entity_id: switch.plant_water_pump
    - delay: '00:00:30'
    - service: switch.turn_off
      target:
        entity_id: switch.plant_water_pump`,
            description: 'Automated plant watering based on soil moisture',
            usage: 'Smart gardening with moisture sensors and water pumps.',
            technologies: ['Gardening', 'Moisture', 'Automation'],
          },
          {
            title: 'Presence-Based Actions',
            code: `# automations.yaml
- alias: 'Welcome Home'
  trigger:
    - platform: state
      entity_id: person.john
      from: 'not_home'
      to: 'home'
  action:
    - service: light.turn_on
      target:
        entity_id: light.entrance
    - service: climate.set_temperature
      target:
        entity_id: climate.living_room
      data:
        temperature: 22
    - service: media_player.play_media
      target:
        entity_id: media_player.living_room_speaker
      data:
        media_content_type: music
        media_content_id: "spotify:playlist:welcome_home"
    - service: notify.mobile_app
      data:
        message: "Welcome home! House is ready."`,
            description: 'Trigger actions when someone arrives home',
            usage: 'Personalized welcome routines based on presence detection.',
            technologies: ['Presence', 'Person', 'Geolocation'],
          },
          {
            title: 'Energy Monitoring Alert',
            code: `# automations.yaml
- alias: 'High Power Usage Alert'
  trigger:
    - platform: numeric_state
      entity_id: sensor.home_power_usage
      above: 3000
      for:
        minutes: 10
  action:
    - service: notify.mobile_app
      data:
        message: "⚡ High power usage detected: {{ states('sensor.home_power_usage') }}W"
        title: "Energy Alert"
    - service: persistent_notification.create
      data:
        title: "High Energy Usage"
        message: "Check for devices left on"

- alias: 'Daily Energy Report'
  trigger:
    - platform: time
      at: '20:00:00'
  action:
    - service: notify.mobile_app
      data:
        message: "Today's energy: {{ states('sensor.daily_energy') }} kWh"
        title: "Daily Energy Report"`,
            description: 'Monitor and report energy consumption',
            usage: 'Track energy usage, identify issues, reduce electricity bills.',
            technologies: ['Energy', 'Monitoring', 'Smart Meter'],
          },
        ],
      },
    },
  },

  ecommerce: {
    id: 'ecommerce',
    name: 'E-Commerce (Shopify)',
    icon: '🛒',
    color: '#96BF48',
    description: 'Building online stores with Shopify and e-commerce platforms',
    categories: {
      shopify: {
        name: 'Shopify Development',
        items: [
          {
            title: 'Shopify Liquid Template',
            code: `<!-- product.liquid -->
<div class="product">
  <h1>{{ product.title }}</h1>
  
  <div class="product-price">
    {{ product.price | money }}
  </div>
  
  <div class="product-description">
    {{ product.description }}
  </div>
  
  <form action="/cart/add" method="post">
    <select name="id">
      {% for variant in product.variants %}
        <option value="{{ variant.id }}">
          {{ variant.title }} - {{ variant.price | money }}
        </option>
      {% endfor %}
    </select>
    
    <button type="submit">Add to Cart</button>
  </form>
</div>`,
            description: 'Create custom Shopify product templates',
            usage: 'Liquid is Shopify\'s templating language. Customize your store design.',
            technologies: ['Liquid', 'Shopify', 'HTML'],
          },
          {
            title: 'Shopify App with Node.js',
            code: `const Shopify = require('@shopify/shopify-api').default;

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: ['read_products', 'write_products'],
  HOST_NAME: process.env.HOST,
  IS_EMBEDDED_APP: true,
});

// Fetch products
async function getProducts(session) {
  const client = new Shopify.Clients.Rest(
    session.shop,
    session.accessToken
  );
  
  const products = await client.get({
    path: 'products',
  });
  
  return products.body.products;
}`,
            description: 'Build Shopify apps with Node.js',
            usage: 'Extend Shopify functionality with custom apps. Access Shopify Admin API.',
            technologies: ['Node.js', 'Shopify API', 'REST'],
          },
          {
            title: 'Shopify Storefront API (GraphQL)',
            code: `const query = \`
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          variants(first: 5) {
            edges {
              node {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
\`;

fetch('https://your-store.myshopify.com/api/2024-01/graphql.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': 'your-token',
  },
  body: JSON.stringify({ query }),
})
.then(res => res.json())
.then(data => console.log(data));`,
            description: 'Use Storefront API for headless commerce',
            usage: 'Build custom storefronts with React/Next.js while using Shopify backend.',
            technologies: ['GraphQL', 'Shopify Storefront', 'Headless Commerce'],
          },
        ],
      },
      payments: {
        name: 'Payment Integration',
        items: [
          {
            title: 'Stripe Checkout',
            code: `import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create checkout session
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-Shirt',
          images: ['https://example.com/t-shirt.png'],
        },
        unit_amount: 2000, // $20.00
      },
      quantity: 1,
    },
  ],
  mode: 'payment',
  success_url: 'https://example.com/success',
  cancel_url: 'https://example.com/cancel',
});

// Redirect to Stripe Checkout
return res.redirect(session.url);`,
            description: 'Integrate Stripe payment processing',
            usage: 'Industry-standard payment processing. Easy to integrate, highly secure.',
            technologies: ['Stripe', 'Payments', 'Checkout'],
          },
          {
            title: 'Stripe Webhook Handler',
            code: `import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');
  
  let event;
  
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return new Response(\`Webhook Error: \${err.message}\`, {
      status: 400,
    });
  }
  
  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(\`Payment \${paymentIntent.id} succeeded!\`);
      // Fulfill the order
      await fulfillOrder(paymentIntent.id);
      break;
      
    case 'payment_intent.payment_failed':
      console.log('Payment failed');
      // Notify customer
      break;
      
    default:
      console.log(\`Unhandled event type \${event.type}\`);
  }
  
  return new Response(JSON.stringify({ received: true }));
}`,
            description: 'Handle Stripe webhook events for order fulfillment',
            usage: 'Automatically process orders when payments succeed.',
            technologies: ['Stripe', 'Webhooks', 'Event Processing'],
          },
          {
            title: 'PayPal Checkout Integration',
            code: `// Server-side order creation
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const createOrder = async (data, actions) => {
  return actions.order.create({
    purchase_units: [
      {
        amount: {
          value: "100.00",
          currency_code: "USD"
        },
        description: "Product Purchase"
      }
    ]
  });
};

const onApprove = async (data, actions) => {
  return actions.order.capture().then((details) => {
    console.log('Transaction completed by', details.payer.name.given_name);
    // Call your server to save the transaction
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: data.orderID,
        payerId: data.payerID
      })
    });
  });
};

// React component
<PayPalButtons
  createOrder={createOrder}
  onApprove={onApprove}
/>`,
            description: 'Integrate PayPal checkout into your e-commerce site',
            usage: 'Accept PayPal payments with official SDK.',
            technologies: ['PayPal', 'React', 'Payment Gateway'],
          },
        ],
      },
      marketing: {
        name: 'Marketing & Analytics',
        items: [
          {
            title: 'Google Analytics E-commerce Tracking',
            code: `// Track product views
gtag('event', 'view_item', {
  items: [
    {
      id: 'SKU_12345',
      name: 'Premium T-Shirt',
      category: 'Apparel/Shirts',
      price: 29.99,
      quantity: 1
    }
  ]
});

// Track add to cart
gtag('event', 'add_to_cart', {
  items: [
    {
      id: 'SKU_12345',
      name: 'Premium T-Shirt',
      price: 29.99,
      quantity: 1
    }
  ]
});

// Track purchase
gtag('event', 'purchase', {
  transaction_id: 'T_12345',
  value: 29.99,
  currency: 'USD',
  tax: 2.40,
  shipping: 5.00,
  items: [
    {
      id: 'SKU_12345',
      name: 'Premium T-Shirt',
      category: 'Apparel/Shirts',
      price: 29.99,
      quantity: 1
    }
  ]
});`,
            description: 'Track e-commerce events with Google Analytics',
            usage: 'Measure product performance, conversion rates, revenue.',
            technologies: ['Google Analytics', 'E-commerce', 'Tracking'],
          },
          {
            title: 'Facebook Pixel for E-commerce',
            code: `// Initialize Facebook Pixel
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');

// Track events
fbq('track', 'ViewContent', {
  content_name: 'Premium T-Shirt',
  content_ids: ['SKU_12345'],
  content_type: 'product',
  value: 29.99,
  currency: 'USD'
});

fbq('track', 'AddToCart', {
  content_ids: ['SKU_12345'],
  content_type: 'product',
  value: 29.99,
  currency: 'USD'
});

fbq('track', 'Purchase', {
  value: 29.99,
  currency: 'USD',
  contents: [
    {id: 'SKU_12345', quantity: 1}
  ]
});`,
            description: 'Track conversions and create retargeting audiences',
            usage: 'Optimize Facebook/Instagram ads, measure ROAS.',
            technologies: ['Facebook Pixel', 'Marketing', 'Retargeting'],
          },
          {
            title: 'Email Marketing with SendGrid',
            code: `import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Abandoned cart email
async function sendAbandonedCartEmail(customerEmail, cartItems) {
  const msg = {
    to: customerEmail,
    from: 'store@example.com',
    subject: '🛒 You left items in your cart!',
    templateId: 'd-abandoned-cart-template-id',
    dynamicTemplateData: {
      customer_name: 'John',
      cart_items: cartItems,
      cart_total: cartItems.reduce((sum, item) => 
        sum + (item.price * item.quantity), 0
      ),
      checkout_url: 'https://store.com/checkout'
    }
  };
  
  await sgMail.send(msg);
}

// Order confirmation
async function sendOrderConfirmation(order) {
  const msg = {
    to: order.customer.email,
    from: 'orders@example.com',
    subject: \`✅ Order #\${order.id} Confirmed\`,
    templateId: 'd-order-confirmation-template',
    dynamicTemplateData: {
      order_id: order.id,
      customer_name: order.customer.name,
      items: order.items,
      total: order.total,
      shipping_address: order.shipping_address,
      estimated_delivery: order.estimated_delivery
    }
  };
  
  await sgMail.send(msg);
}`,
            description: 'Send transactional and marketing emails',
            usage: 'Recover abandoned carts, send order confirmations, newsletters.',
            technologies: ['SendGrid', 'Email Marketing', 'Transactional Email'],
          },
        ],
      },
    },
  },

  linux: {
    id: 'linux',
    name: 'Linux & System Admin',
    icon: '🐧',
    color: '#FCC624',
    description: 'Linux system administration, server management, and DevOps',
    categories: {
      basics: {
        name: 'Linux Basics',
        items: [
          {
            title: 'Essential Linux Commands',
            code: `# File operations
ls -la                  # List files with details
cd /path/to/directory   # Change directory
mkdir new_folder        # Create directory
rm -rf folder           # Remove directory
cp source dest          # Copy files
mv source dest          # Move/rename files

# File viewing
cat file.txt            # Display file
less file.txt           # View file (paginated)
head -n 10 file.txt     # First 10 lines
tail -f /var/log/app.log # Follow log file

# Search
grep "error" file.txt   # Search in file
find / -name "*.log"    # Find files
which python3           # Find command location

# Process management
ps aux                  # List all processes
top                     # Interactive process viewer
kill -9 PID             # Force kill process
htop                    # Better process viewer`,
            description: 'Essential Linux terminal commands every developer needs',
            usage: 'Master these for daily Linux system interaction and server management.',
            technologies: ['Linux', 'Bash', 'Terminal'],
          },
          {
            title: 'User & Permission Management',
            code: `# User management
sudo adduser username       # Add new user
sudo usermod -aG sudo user  # Add user to sudo group
sudo deluser username       # Delete user
whoami                      # Current user
id                          # User ID and groups

# File permissions
chmod 755 script.sh         # rwxr-xr-x
chmod +x script.sh          # Make executable
chown user:group file.txt   # Change ownership
ls -l                       # View permissions

# Permission breakdown:
# 755 = rwxr-xr-x
# 7 = owner (read+write+execute)
# 5 = group (read+execute)
# 5 = others (read+execute)`,
            description: 'Manage users, groups, and file permissions',
            usage: 'Critical for server security and multi-user systems.',
            technologies: ['Linux', 'Permissions', 'Security'],
          },
          {
            title: 'System Information',
            code: `# System info
uname -a                # System information
hostnamectl             # Hostname and OS info
df -h                   # Disk usage (human-readable)
free -h                 # Memory usage
lsblk                   # List block devices
lscpu                   # CPU information

# Network
ifconfig                # Network interfaces (deprecated)
ip addr show            # Network interfaces (modern)
netstat -tulpn          # Network connections
ss -tulpn               # Socket statistics (modern)
ping google.com         # Test connectivity

# Package management (Ubuntu/Debian)
sudo apt update         # Update package list
sudo apt upgrade        # Upgrade packages
sudo apt install pkg    # Install package
sudo apt remove pkg     # Remove package`,
            description: 'Check system resources and network information',
            usage: 'Monitor server health, troubleshoot issues, manage packages.',
            technologies: ['Linux', 'Networking', 'System Admin'],
          },
        ],
      },
      serverManagement: {
        name: 'Server Management',
        items: [
          {
            title: 'Nginx Configuration',
            code: `# /etc/nginx/sites-available/myapp
server {
    listen 80;
    server_name example.com www.example.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Commands
sudo nginx -t                    # Test configuration
sudo systemctl restart nginx     # Restart Nginx
sudo systemctl status nginx      # Check status`,
            description: 'Configure Nginx as reverse proxy',
            usage: 'Deploy Node.js, Python, or any web app behind Nginx.',
            technologies: ['Nginx', 'Reverse Proxy', 'Web Server'],
          },
          {
            title: 'Systemd Service',
            code: `# /etc/systemd/system/myapp.service
[Unit]
Description=My Node.js Application
After=network.target

[Service]
Type=simple
User=nodejs
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/node /opt/myapp/server.js
Restart=always
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target

# Commands
sudo systemctl daemon-reload        # Reload systemd
sudo systemctl start myapp          # Start service
sudo systemctl enable myapp         # Enable on boot
sudo systemctl status myapp         # Check status
sudo journalctl -u myapp -f         # View logs`,
            description: 'Create systemd service for applications',
            usage: 'Run apps as services, auto-restart on failure, start on boot.',
            technologies: ['systemd', 'Linux', 'Service Management'],
          },
        ],
      },
      advanced: {
        name: 'Advanced Administration',
        items: [
          {
            title: 'Firewall with UFW',
            code: `# Enable UFW
sudo ufw enable

# Default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH (IMPORTANT: do this first!)
sudo ufw allow ssh
sudo ufw allow 22/tcp

# Allow HTTP/HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Allow specific port
sudo ufw allow 3000/tcp

# Allow from specific IP
sudo ufw allow from 192.168.1.100

# Allow port range
sudo ufw allow 6000:6010/tcp

# Status and rules
sudo ufw status verbose
sudo ufw status numbered

# Delete rule
sudo ufw delete 2
sudo ufw delete allow 80/tcp`,
            description: 'Configure firewall with Uncomplicated Firewall (UFW)',
            usage: 'Secure your server by controlling network access.',
            technologies: ['UFW', 'Firewall', 'Security'],
          },
          {
            title: 'Automated Backups with Cron',
            code: `#!/bin/bash
# backup-script.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"
SOURCE_DIR="/var/www"
DB_NAME="myapp_db"

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup files
tar -czf $BACKUP_DIR/files_$DATE.tar.gz $SOURCE_DIR

# Backup database
mysqldump -u root -p$DB_PASSWORD $DB_NAME > $BACKUP_DIR/db_$DATE.sql

# Compress database backup
gzip $BACKUP_DIR/db_$DATE.sql

# Delete backups older than 30 days
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete
find $BACKUP_DIR -name "*.sql.gz" -mtime +30 -delete

echo "Backup completed: $DATE"

# Add to crontab for daily backups at 2 AM:
# crontab -e
# 0 2 * * * /opt/scripts/backup-script.sh >> /var/log/backup.log 2>&1`,
            description: 'Automate file and database backups with cron',
            usage: 'Protect your data with scheduled automated backups.',
            technologies: ['Cron', 'Backup', 'Automation'],
          },
          {
            title: 'SSH Key Authentication',
            code: `# Generate SSH key pair (on local machine)
ssh-keygen -t ed25519 -C "your_email@example.com"
# Or for RSA:
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Copy public key to server
ssh-copy-id user@server.com

# Manual copy (if ssh-copy-id not available)
cat ~/.ssh/id_ed25519.pub | ssh user@server.com "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"

# Secure SSH configuration (on server)
# Edit /etc/ssh/sshd_config:
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
Port 2222  # Change default port

# Restart SSH service
sudo systemctl restart sshd

# Connect with key
ssh user@server.com
ssh -i ~/.ssh/custom_key user@server.com -p 2222`,
            description: 'Set up secure SSH key-based authentication',
            usage: 'More secure than passwords, enable passwordless login.',
            technologies: ['SSH', 'Security', 'Authentication'],
          },
          {
            title: 'Docker Container Management',
            code: `# Pull and run container
docker pull nginx:latest
docker run -d -p 80:80 --name webserver nginx

# List containers
docker ps                    # Running containers
docker ps -a                 # All containers

# Container operations
docker start container_name
docker stop container_name
docker restart container_name
docker rm container_name

# View logs
docker logs -f container_name

# Execute command in container
docker exec -it container_name bash

# Build image from Dockerfile
docker build -t myapp:1.0 .

# Docker Compose
docker-compose up -d         # Start services
docker-compose down          # Stop services
docker-compose logs -f       # View logs
docker-compose ps            # List services

# Cleanup
docker system prune -a       # Remove unused data
docker volume prune          # Remove unused volumes`,
            description: 'Manage Docker containers and images',
            usage: 'Deploy applications in isolated, portable containers.',
            technologies: ['Docker', 'Containers', 'DevOps'],
          },
          {
            title: 'Log Analysis with Journalctl',
            code: `# View all logs
journalctl

# Follow logs (like tail -f)
journalctl -f

# Logs from specific service
journalctl -u nginx.service
journalctl -u nginx.service -f

# Logs from specific time
journalctl --since "2024-01-01"
journalctl --since "1 hour ago"
journalctl --since "2024-01-01" --until "2024-01-02"

# Filter by priority
journalctl -p err            # Errors only
journalctl -p warning        # Warnings and above

# Show kernel messages
journalctl -k

# Show boot logs
journalctl -b                # Current boot
journalctl -b -1             # Previous boot

# Disk usage by logs
journalctl --disk-usage

# Clean old logs
sudo journalctl --vacuum-time=7d   # Keep 7 days
sudo journalctl --vacuum-size=1G   # Keep 1GB`,
            description: 'Analyze system logs with journalctl',
            usage: 'Troubleshoot issues, monitor system health, debug services.',
            technologies: ['Journalctl', 'Systemd', 'Logging'],
          },
          {
            title: 'Performance Monitoring',
            code: `# CPU and memory monitoring
top                          # Basic process monitor
htop                         # Enhanced monitor
vmstat 1                     # Virtual memory stats

# Disk I/O
iostat -x 1                  # I/O statistics
iotop                        # I/O by process

# Network monitoring
iftop                        # Network bandwidth
nethogs                      # Network by process
tcpdump -i eth0              # Packet capture

# System resource usage
dstat                        # All-in-one monitoring
nmon                         # Comprehensive monitor

# Check system load
uptime
cat /proc/loadavg

# Memory details
free -h
cat /proc/meminfo

# Disk performance test
dd if=/dev/zero of=test bs=1M count=1000 oflag=direct

# Process CPU usage
ps aux --sort=-%cpu | head
ps aux --sort=-%mem | head`,
            description: 'Monitor system performance and resource usage',
            usage: 'Identify bottlenecks, optimize performance, troubleshoot slowness.',
            technologies: ['Performance', 'Monitoring', 'Linux'],
          },
        ],
      },
    },
  },

  proxmox: {
    id: 'proxmox',
    name: 'Proxmox & Virtualization',
    icon: '🖥️',
    color: '#E57000',
    description: 'Proxmox VE - Virtual environment and container management',
    categories: {
      basics: {
        name: 'Proxmox Basics',
        items: [
          {
            title: 'Create VM via CLI',
            code: `# Create VM
qm create 100 \\
  --name ubuntu-vm \\
  --memory 2048 \\
  --cores 2 \\
  --net0 virtio,bridge=vmbr0 \\
  --cdrom local:iso/ubuntu-22.04.iso

# Configure disk
qm set 100 --scsi0 local-lvm:32

# Start VM
qm start 100

# List VMs
qm list

# Stop VM
qm stop 100

# Delete VM
qm destroy 100`,
            description: 'Create and manage virtual machines via command line',
            usage: 'Automate VM creation, useful for infrastructure as code.',
            technologies: ['Proxmox', 'QEMU', 'Virtualization'],
          },
          {
            title: 'LXC Container',
            code: `# Download template
pveam update
pveam available
pveam download local ubuntu-22.04-standard_22.04-1_amd64.tar.zst

# Create container
pct create 101 local:vztmpl/ubuntu-22.04-standard_22.04-1_amd64.tar.zst \\
  --hostname ubuntu-ct \\
  --memory 1024 \\
  --cores 2 \\
  --net0 name=eth0,bridge=vmbr0,ip=dhcp

# Start container
pct start 101

# Enter container
pct enter 101

# List containers
pct list`,
            description: 'Create lightweight Linux containers with LXC',
            usage: 'Containers are more efficient than VMs. Perfect for microservices.',
            technologies: ['LXC', 'Containers', 'Proxmox'],
          },
          {
            title: 'Backup and Restore',
            code: `# Backup VM/Container
vzdump 100 --mode snapshot --compress gzip --storage local

# List backups
pvesm list local

# Restore backup
qmrestore /var/lib/vz/dump/vzdump-qemu-100-*.vma.gz 100

# Automated backup schedule (via GUI)
# Datacenter > Backup > Add
# Or edit: /etc/pve/vzdump.cron`,
            description: 'Backup and restore VMs and containers',
            usage: 'Regular backups are essential. Snapshot mode for minimal downtime.',
            technologies: ['Backup', 'vzdump', 'Disaster Recovery'],
          },
        ],
      },
    },
  },

  devops: {
    id: 'devops',
    name: 'DevOps & CI/CD',
    icon: '🔄',
    color: '#2563EB',
    description: 'DevOps practices, CI/CD pipelines, and automation tools',
    categories: {
      docker: {
        name: 'Docker',
        items: [
          {
            title: 'Dockerfile Basics',
            code: `# Multi-stage build for Node.js app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]`,
            description: 'Create efficient Docker images with multi-stage builds',
            usage: 'Reduces image size and improves security by separating build and runtime.',
            technologies: ['Docker', 'Containers', 'Node.js'],
          },
          {
            title: 'Docker Compose',
            code: `version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://db:5432/myapp
    depends_on:
      - db
  
  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=secret

volumes:
  postgres_data:`,
            description: 'Define and run multi-container Docker applications',
            usage: 'Perfect for local development environments with multiple services.',
            technologies: ['Docker Compose', 'PostgreSQL', 'Orchestration'],
          },
        ],
      },
      kubernetes: {
        name: 'Kubernetes',
        items: [
          {
            title: 'Deployment YAML',
            code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: app
        image: myapp:latest
        ports:
        - containerPort: 8080
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"`,
            description: 'Deploy containerized applications to Kubernetes',
            usage: 'Scales applications automatically, ensures high availability.',
            technologies: ['Kubernetes', 'Orchestration', 'Scaling'],
          },
        ],
      },
      githubActions: {
        name: 'GitHub Actions',
        items: [
          {
            title: 'CI/CD Pipeline',
            code: `name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
    
    - name: Deploy to production
      if: github.ref == 'refs/heads/main'
      run: npm run deploy
      env:
        DEPLOY_KEY: \${{ secrets.DEPLOY_KEY }}`,
            description: 'Automate testing, building, and deployment workflows',
            usage: 'Runs on every push/PR, ensures code quality before merge.',
            technologies: ['GitHub Actions', 'CI/CD', 'Automation'],
          },
        ],
      },
    },
  },

  cloud: {
    id: 'cloud',
    name: 'Cloud Platforms',
    icon: '☁️',
    color: '#0EA5E9',
    description: 'AWS, Azure, Google Cloud services and cloud-native development',
    categories: {
      aws: {
        name: 'AWS',
        items: [
          {
            title: 'S3 File Upload',
            code: `import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({ region: 'us-east-1' });

async function uploadFile(file, bucketName) {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: file.name,
    Body: file,
    ContentType: file.type,
  });
  
  try {
    const response = await s3Client.send(command);
    console.log('Upload successful:', response);
    return response;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
}`,
            description: 'Upload files to AWS S3 using SDK v3',
            usage: 'Store and retrieve any amount of data from anywhere on the web.',
            technologies: ['AWS', 'S3', 'Cloud Storage'],
          },
          {
            title: 'Lambda Function',
            code: `export const handler = async (event) => {
  console.log('Event:', JSON.stringify(event, null, 2));
  
  try {
    const body = JSON.parse(event.body);
    
    // Process data
    const result = {
      message: 'Success',
      data: body,
      timestamp: new Date().toISOString(),
    };
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};`,
            description: 'Serverless function that runs on AWS Lambda',
            usage: 'No server management, pay only for compute time, auto-scaling.',
            technologies: ['AWS Lambda', 'Serverless', 'Node.js'],
          },
        ],
      },
    },
  },

  blockchain: {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    icon: '🔗',
    color: '#8B5CF6',
    description: 'Smart contracts, cryptocurrency, and decentralized applications',
    categories: {
      solidity: {
        name: 'Solidity Smart Contracts',
        items: [
          {
            title: 'Simple ERC20 Token',
            code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        _mint(msg.sender, initialSupply);
    }
    
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}`,
            description: 'Create a basic ERC20 token on Ethereum',
            usage: 'Foundation for creating cryptocurrencies and utility tokens.',
            technologies: ['Solidity', 'Ethereum', 'ERC20'],
          },
          {
            title: 'NFT Contract',
            code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    constructor() ERC721("MyNFT", "MNFT") {}
    
    function mintNFT(address recipient, string memory tokenURI)
        public returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        
        return newItemId;
    }
}`,
            description: 'Create non-fungible tokens (NFTs) on Ethereum',
            usage: 'Digital collectibles, art, gaming items, and unique assets.',
            technologies: ['Solidity', 'NFT', 'ERC721'],
          },
        ],
      },
    },
  },

  security: {
    id: 'security',
    name: 'Security & Encryption',
    icon: '🔒',
    color: '#DC2626',
    description: 'Application security, encryption, and secure coding practices',
    categories: {
      authentication: {
        name: 'Authentication',
        items: [
          {
            title: 'JWT Authentication',
            code: `const jwt = require('jsonwebtoken');

// Generate token
function generateToken(userId) {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
}

// Verify token middleware
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
}`,
            description: 'Implement JWT-based authentication',
            usage: 'Stateless authentication, perfect for APIs and microservices.',
            technologies: ['JWT', 'Authentication', 'Node.js'],
          },
        ],
      },
      encryption: {
        name: 'Encryption',
        items: [
          {
            title: 'AES Encryption',
            code: `const crypto = require('crypto');

function encrypt(text, password) {
  const algorithm = 'aes-256-cbc';
  const key = crypto.scryptSync(password, 'salt', 32);
  const iv = crypto.randomBytes(16);
  
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return {
    iv: iv.toString('hex'),
    encrypted: encrypted
  };
}

function decrypt(encrypted, password, iv) {
  const algorithm = 'aes-256-cbc';
  const key = crypto.scryptSync(password, 'salt', 32);
  
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(iv, 'hex')
  );
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}`,
            description: 'Encrypt and decrypt sensitive data using AES-256',
            usage: 'Protect sensitive information like passwords, API keys, personal data.',
            technologies: ['AES', 'Encryption', 'Node.js', 'Crypto'],
          },
        ],
      },
    },
  },

  testing: {
    id: 'testing',
    name: 'Testing & QA',
    icon: '🧪',
    color: '#10B981',
    description: 'Unit testing, integration testing, and test automation',
    categories: {
      jest: {
        name: 'Jest Testing',
        items: [
          {
            title: 'Unit Test Example',
            code: `// math.js
export function add(a, b) {
  return a + b;
}

// math.test.js
import { add } from './math';

describe('Math functions', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
  
  test('handles negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });
  
  test('handles zero', () => {
    expect(add(0, 5)).toBe(5);
  });
});`,
            description: 'Write unit tests with Jest framework',
            usage: 'Ensure code works correctly, catch bugs early in development.',
            technologies: ['Jest', 'Testing', 'JavaScript'],
          },
        ],
      },
      reactTesting: {
        name: 'React Testing Library',
        items: [
          {
            title: 'Component Test',
            code: `import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter on button click', () => {
  render(<Counter />);
  
  const button = screen.getByRole('button', { name: /increment/i });
  const count = screen.getByText(/count: 0/i);
  
  expect(count).toBeInTheDocument();
  
  fireEvent.click(button);
  
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});`,
            description: 'Test React components with user interactions',
            usage: 'Verify components render and behave correctly from user perspective.',
            technologies: ['React Testing Library', 'Jest', 'React'],
          },
        ],
      },
    },
  },
};

// Export individual topic categories for easier access
export const iotTopics = specializedTopics.iot;
export const homeAssistantTopics = specializedTopics.homeAssistant;
export const ecommerceTopics = specializedTopics.ecommerce;
export const linuxTopics = specializedTopics.linux;
export const proxmoxTopics = specializedTopics.proxmox;
export const devopsTopics = specializedTopics.devops;
export const cloudTopics = specializedTopics.cloud;
export const blockchainTopics = specializedTopics.blockchain;
export const securityTopics = specializedTopics.security;
export const testingTopics = specializedTopics.testing;
