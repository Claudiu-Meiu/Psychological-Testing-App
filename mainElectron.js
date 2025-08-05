const { app, BrowserWindow } = require("electron/main");
const { spawn } = require("child_process");
const path = require("path");

let serverProcess;

const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    width: 1280,
    height: 720,
  });

  win.maximize();

  win.loadFile("dist/psychological-testing-app/browser/index.html");
};

const startServer = () => {
  const serverPath = path.join(__dirname, "backend", "server.js");
  serverProcess = spawn("node", [serverPath], {
    detached: true,
    stdio: "ignore",
  });

  serverProcess.unref();

  serverProcess.on("error", (err) => {
    console.error("Failed to start server:", err);
  });

  serverProcess.on("exit", (code) => {
    console.log(`Server exited with code ${code}`);
  });
};

app.whenReady().then(() => {
  startServer();
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", () => {
  if (serverProcess) {
    serverProcess.kill();
  }
});
