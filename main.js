const { app, BrowserWindow } = require('electron');
const path = require('path');
const electronReload = require('electron-reload');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    });

    win.loadFile('index.html');
    win.maximize(true);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    electronReload(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
