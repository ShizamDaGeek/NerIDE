const { app, BrowserWindow } = require('electron');
const path = require('path');
const electronReload = require('electron-reload');

function createWindow() 
{
    const win = new BrowserWindow
    ({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: 
        {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        }
    });

    win.loadFile('index.html');
    win.maximize(true);
    win.setMenuBarVisibility(false);

    ipcMain.on('minimize', () => {
        if (mainWindow) {
            mainWindow.minimize();
        }
    });

    ipcMain.on('resize', (event, { width, height }) => {
        if (mainWindow) {
            mainWindow.setSize(width, height);
            mainWindow.maximize();
        }
    });

    ipcMain.on('close', () => {
        if (mainWindow) {
            mainWindow.close();
        }
    });
}

app.whenReady().then(() => 
{
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

app.on('window-all-closed', () => 
{
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
