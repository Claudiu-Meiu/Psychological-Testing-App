import { app, BrowserWindow } from "electron";

import "./backend/server.js";

const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    width: 1280,
    height: 720,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  win.maximize();
  win.loadFile("dist/psychological-testing-app/browser/index.html");
};

app.whenReady().then(() => {
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
