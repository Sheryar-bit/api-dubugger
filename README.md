# API Debugger

![API Debugger](https://img.shields.io/badge/API-Debugger-blue.svg)

An npm package that automatically logs incoming API requests, response times, and detects slow responses to help the developersA lightweight **Express.js middleware** for logging incoming API 
requests, response times, and detecting slow responses. This tool helps developers debug APIs efficiently with structured logs.

## Features 🚀
- Logs **HTTP requests** (method, URL, headers, and body)
- Tracks **response times** and logs them
- Highlights **slow responses** (configurable threshold)
- Prevents **duplicate logs** for cleaner debugging
- Ignores unnecessary **`/favicon.ico` requests**

---

## Installation 📦

```sh
npm install api-debugger
```

or

```sh
yarn add api-debugger
```

---

## Usage 🛠️

### **Basic Setup**

```javascript
const express = require("express");
const apiDebugger = require("api-debugger");

const app = express();
app.use(express.json());
app.use(apiDebugger({ slowThreshold: 500 })); // Logs slow responses >500ms

app.get("/", (req, res) => {
    setTimeout(() => res.send("Hello, World!"), 200); // Simulate delay
});

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
```

---

## Configuration ⚙️
The middleware accepts an **optional configuration object**:

```javascript
app.use(apiDebugger({ slowThreshold: 1000 }));
```
| Option         | Type    | Default | Description |
|---------------|--------|---------|-------------|
| `slowThreshold` | `number` | `1000` ms | Logs a warning if response time exceeds this value |

---

## Example Output 📜
```
📡 Incoming Request: GET /
Headers: { host: 'localhost:3000', user-agent: 'Mozilla/5.0 ...' }
✅ Response Sent - Status: 200, Time: 203.50ms
```

If the response is slow:
```
⚠️ Slow Response: 1203.45ms
```

---

## Contributing 🤝
Pull requests and feature suggestions are welcome! Feel free to **open an issue** if you find a bug or need an enhancement.

---

## Author 👨‍💻
**Muhammad Sheryar**  
📧 [LinkedIn](https://pk.linkedin.com/in/httsheryar-ali-53349a219)  
🔗 [GitHub](https://github.com/Sheryar-bit)  

