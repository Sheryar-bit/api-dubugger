# API Debugger  

![API Debugger](https://img.shields.io/badge/API-Debugger-blue.svg) ![License](https://img.shields.io/badge/License-MIT-green.svg)  

API Debugger is a **lightweight and developer-friendly middleware** designed for logging API requests and responses in **Express.js** applications. It provides **detailed insights** into each request, including **HTTP method, URL, headers, body, response time**, and warnings for **slow responses**.  
With a simple plug-and-play setup, this tool helps developers efficiently debug and analyze API behavior in real-time. The logs are structured and color-coded for better readability, making it easy to spot issues in development and testing environments.  

---

## **Features 🚀**  
✅ **Logs all incoming requests** (method, URL, headers, body)  
✅ **Tracks response times** and logs them in milliseconds  
✅ **Highlights slow responses** with a configurable threshold  
✅ **Prevents duplicate logs** for cleaner debugging  
✅ **Ignores unnecessary `/favicon.ico` requests**  
✅ **No external dependencies**, ensuring lightweight performance  
✅ **Works with any Express-based server**  

---

## **Supported Frameworks & Environments**  
### **Express.js (Fully Supported ✅)**  
- Works **seamlessly** with Express.js applications.  
- Can be used with **any Express middleware stack**.  

### **NestJS (Compatible ✅)**  
- Can be integrated into **NestJS** applications as a middleware.  
- Use it within a global or route-specific middleware.  

### **Koa.js (Partially Compatible ⚠️)**  
- Koa does not use `req` and `res` in the same way as Express.  
- Can be adapted using **Koa-to-Express middleware converters**.  

### **Fastify (Not Directly Compatible ❌)**  
- Fastify uses a different request-handling mechanism.  
- You might need a custom adapter to use this with Fastify.  

### **Other Node.js Frameworks**  
- **Hapi.js, Sails.js, and Adonis.js** may require modifications.  
- Works best with **Express-compatible frameworks**.  

---

## **Why Use API Debugger?**  
🔹 **Real-time logging** to monitor API requests and responses.  
🔹 **Better debugging** for RESTful APIs during development.  
🔹 **Identify slow responses** and optimize API performance.  
🔹 **Lightweight middleware** without adding unnecessary dependencies.  
🔹 **Customizable thresholds** to detect slow API requests.  

If you are working on a **REST API using Express.js**, API Debugger is a **must-have tool** to make debugging easier and improve API performance tracking! 🚀

## Installation 📦

```sh
npm i api-debugger-sheryar
```

or

```sh
yarn add api-debugger-sheryar
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

