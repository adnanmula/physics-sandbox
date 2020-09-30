const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: false
        }
    });

    win.loadFile('html/index.html');
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);