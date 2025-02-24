const onFinished = require("on-finished");
const chalk = require("chalk");

function apiDebugger(options = {}) {
    return function (req, res, next) {
        // ignoring favicon requests
        if (req.url==="/favicon.ico") return next(); 

        const startTime = process.hrtime();
        const { method, url, headers, body } = req;

        // Preventing duplicate header logs
        if (!req._loggedHeaders) {
            console.log(chalk.blue(`📡 Incoming Request: ${method} ${url}`));
            console.log(chalk.gray("Headers:"), headers);
            req._loggedHeaders = true;
        }

        if (Object.keys(body).length) {
            console.log(chalk.gray("Body:"), body);
        }

        onFinished(res, function () {
            // Preventinh duplicate logs
            if (res._logged) 
                return; 
            res._logged = true;

const elapsedTime = process.hrtime(startTime);
const responseTime = (elapsedTime[0] * 1000 + elapsedTime[1] / 1e6).toFixed(2);            
console.log(chalk.green(`✅ Response Sent - Status: ${res.statusCode}, Time: ${responseTime}ms`));

            if (responseTime > (options.slowThreshold || 1000)) {
                console.warn(chalk.yellow(`⚠️ Slow Response: ${responseTime}ms`));
            }
        });

        next();
    };
}

module.exports = apiDebugger;

