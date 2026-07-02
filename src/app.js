import express from "express";
import cors from "cors";

const app = express();

// Basic Configuration

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));

// Cors Configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || C:\Users\FESF\Desktop\NodeJS-Practice>node run test
node:internal/modules/cjs/loader:1503
  throw err;
  ^

Error: Cannot find module 'C:\Users\FESF\Desktop\NodeJS-Practice\run'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1500:15)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1071:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1095:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1116:12)
    at Module._load (node:internal/modules/cjs/loader:1285:25)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v24.17.0

C:\Users\FESF\Desktop\NodeJS-Practice>,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.get("/instagram", (req, res) => {
    res.send("This is an instagram page");
});

export default app;