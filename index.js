const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('open-new-window', (_event, { url, width, height, x, y }) => {
  const newWindow = new BrowserWindow({
    width: width || 800,
    height: height || 600,
    x: x || 0,
    y: y || 0,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  newWindow.loadFile(url);
});