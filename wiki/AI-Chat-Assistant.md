# 🤖 AI Chat Assistant

The AI Chat Assistant is powered by Groq API and provides instant coding help, explanations, and code generation.

## 🌟 Features

- **Fast Responses** - Lightning-fast AI powered by Groq
- **Multiple Modes** - Short, Normal, or Detailed responses
- **Context-Aware** - Understands programming context
- **Code Generation** - Get instant code snippets
- **Chat History** - All conversations saved locally
- **Copy to Clipboard** - Easy code copying
- **BYOK** - Bring Your Own Key (free Groq account)

---

## 🚀 Quick Setup

### 1. Get Your Groq API Key

1. Visit [console.groq.com](https://console.groq.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Click "Create API Key"
5. Copy your new API key

**Note**: Keep your API key secure and never share it publicly!

### 2. Configure in App

1. Open the app
2. Go to **Settings** ⚙️ (bottom navigation)
3. Scroll to **Links & Resources** section
4. Tap on **🔑 Groq API Key**
5. Paste your API key in the text field
6. Tap **Save**

✅ You should see "API Key is configured" confirmation

### 3. Start Chatting

1. Go to home screen
2. Tap **🤖 Ask AI** button
3. Type your question
4. Get instant answers!

---

## 💬 Response Modes

The AI Assistant offers three response modes to match your needs:

### ⚡ Short Mode
- **Best for**: Quick answers
- **Response length**: 1-2 sentences
- **Use cases**:
  - Quick syntax questions
  - Yes/no questions
  - Simple explanations
  
**Example**: "What is useState in React?"
> "useState is a React Hook that lets you add state to functional components."

### 💬 Normal Mode (Default)
- **Best for**: Balanced answers
- **Response length**: 1-2 paragraphs
- **Use cases**:
  - General questions
  - Code explanations
  - Concept understanding

**Example**: "How do I use useState in React?"
> Detailed explanation with code example (5-10 lines)

### 📖 Detailed Mode
- **Best for**: In-depth explanations
- **Response length**: Multiple paragraphs
- **Use cases**:
  - Complex topics
  - Tutorial-style answers
  - Comprehensive guides

**Example**: "Explain React Hooks in detail"
> Comprehensive explanation with multiple examples and use cases

---

## 📝 Best Practices

### Writing Effective Prompts

#### ✅ Good Prompts
```
"How do I create a custom hook in React Native?"
"Explain the difference between let and const in JavaScript"
"Show me an example of async/await in Python"
"What's the best way to handle errors in Node.js?"
```

#### ❌ Avoid
```
"code" (too vague)
"help" (not specific)
"error" (no context)
```

### Tips for Better Results

1. **Be Specific**
   - Bad: "How to use state?"
   - Good: "How to use useState hook in React Native?"

2. **Provide Context**
   - Bad: "API call not working"
   - Good: "My fetch API call in React Native returns 404, how to debug?"

3. **Mention the Language/Framework**
   - "in React Native"
   - "using TypeScript"
   - "with Express.js"

4. **Ask Follow-up Questions**
   - The AI remembers context within the chat
   - Reference previous answers

---

## 🎯 Common Use Cases

### 1. Quick Syntax Reference
```
User: "Array map syntax in JavaScript"
AI: Provides map() syntax and example
```

### 2. Debugging Help
```
User: "Why am I getting 'undefined is not a function' error?"
AI: Explains common causes and solutions
```

### 3. Code Generation
```
User: "Create a simple REST API endpoint in Express"
AI: Generates complete code example
```

### 4. Concept Explanation
```
User: "What are React Hooks and why use them?"
AI: Explains hooks, benefits, and examples
```

### 5. Best Practices
```
User: "What's the best way to manage state in a large React app?"
AI: Suggests solutions like Context API, Redux, Zustand
```

---

## 💾 Chat History

### Automatic Saving
- All conversations are automatically saved
- Persists across app restarts
- Stored locally on your device

### Managing History

#### View Previous Chats
- Scroll up in the chat screen
- All messages remain accessible

#### Clear History
1. Tap the **Clear Chat** button (trash icon)
2. Confirm deletion
3. Start fresh conversation

**Note**: Clearing is permanent and cannot be undone!

---

## 📋 Copy Code Snippets

### Copy AI Response
1. Long press on any AI message
2. Tap **Copy** from the menu
3. Code is copied to clipboard

### Copy Your Question
- Long press on your message
- Tap **Copy**

---

## ⚙️ Advanced Settings

### API Key Management

#### Update API Key
1. Settings → Groq API Key
2. Enter new key
3. Save

#### Remove API Key
1. Settings → Groq API Key
2. Clear the field
3. Save

#### Multiple Devices
- Each device needs its own API key configuration
- Keys are stored locally (not synced)

---

## 🔒 Privacy & Security

### Your Data
- **Chat history**: Stored locally on your device
- **API key**: Encrypted in AsyncStorage
- **Messages**: Sent to Groq API for processing
- **No cloud sync**: Everything stays on your device

### Groq API
- Processes your messages to generate responses
- See [Groq Privacy Policy](https://groq.com/privacy-policy/)
- Your API key usage is tracked by Groq

### Best Practices
- ✅ Never share your API key
- ✅ Don't include sensitive data in prompts
- ✅ Use app-specific API keys
- ✅ Rotate keys periodically

---

## 🐛 Troubleshooting

### "No API Key" Error
**Problem**: App shows "No API key configured"

**Solution**:
1. Go to Settings
2. Add your Groq API key
3. Save and try again

### Slow Responses
**Possible Causes**:
- Slow internet connection
- Groq API server load
- Complex question requiring more processing

**Solutions**:
- Check internet connection
- Try shorter question
- Switch to Short mode

### "API Error" Message
**Possible Causes**:
- Invalid API key
- Rate limit exceeded
- Groq service issue

**Solutions**:
1. Verify API key is correct
2. Check [Groq Status](https://status.groq.com/)
3. Wait a few minutes and retry
4. Check API key usage limits

### Chat History Not Saving
**Problem**: Messages disappear after closing app

**Solution**:
1. Check app permissions (Storage)
2. Ensure enough device storage
3. Reinstall app if issue persists

---

## 📊 Usage Limits

### Groq Free Tier
- Check current limits at [console.groq.com](https://console.groq.com)
- Typical limits:
  - Requests per minute
  - Requests per day
  - Token limits

### Monitor Usage
1. Visit Groq Console
2. Check Dashboard
3. View API usage statistics

### Upgrade Options
- Groq offers paid plans for higher limits
- See [Groq Pricing](https://groq.com/pricing)

---

## 🎨 UI Features

### Message Types
- **Your messages**: Right-aligned, blue background
- **AI messages**: Left-aligned, gray background
- **System messages**: Centered, italic

### Indicators
- **Typing indicator**: Shows when AI is generating response
- **Error indicator**: Red text for errors
- **Timestamp**: Hidden by default (can be added)

---

## 💡 Tips & Tricks

### Productivity Tips
1. **Use Short Mode** for quick lookups
2. **Use Detailed Mode** when learning new concepts
3. **Copy code directly** instead of retyping
4. **Ask follow-ups** to dive deeper

### Example Conversations

#### Learning a New Language
```
You: "I want to learn Python. Where to start?"
AI: [Provides roadmap]
You: "Show me a simple Python script"
AI: [Provides hello world]
You: "Explain what print() does"
AI: [Explains print function]
```

#### Debugging
```
You: "My React component won't render"
AI: [Asks for more details]
You: [Shares error message]
AI: [Provides solution]
```

---

## 🔄 Updates & Roadmap

### Current Version (v2.0)
- ✅ Groq API integration
- ✅ Three response modes
- ✅ Chat history
- ✅ Copy functionality

### Planned Features
- [ ] Multiple AI provider support (OpenAI, Anthropic)
- [ ] Code syntax highlighting in messages
- [ ] Export conversations
- [ ] Voice input
- [ ] Message editing
- [ ] Favorite responses

---

## 🆘 Getting Help

### Documentation
- [Groq Documentation](https://console.groq.com/docs)
- [Groq API Reference](https://console.groq.com/docs/api-reference)

### Support
- **App Issues**: [GitHub Issues](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/issues)
- **Groq API Issues**: [Groq Support](https://groq.com/contact)
- **Community**: [GitHub Discussions](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/discussions)

---

## 📚 Related Pages

- [Getting Started](Getting-Started.md) - Initial setup
- [API Integration](API-Integration.md) - Technical details
- [Troubleshooting](Troubleshooting.md) - Common issues
- [Privacy Policy](Privacy-Policy.md) - Data handling

---

**Happy Chatting! 🤖✨**
