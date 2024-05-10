const { app, shell, window } = require('@tauri-apps/api');

async function createWindow() {
    await window.create({
        title: 'My Tauri App',
        width: 800,
        height: 600,
        resizable: true,
        transparent: false,
        fullscreen: false,
        maximized: false,
        decorations: ['Title', 'Minimize', 'Close'],
        // other window options as needed
    });

    // Load the HTML file
    await window.loadURL('app://./index.html');

    // Handle window events
    window.on('close-requested', () => {
        window.close();
    });

    // Listen for IPC messages
    window.listen('minimize', () => {
        window.minimize();
    });

    window.listen('resize', (event) => {
        const { width, height } = event.payload;
        window.setSize({ width, height });
    });

    window.listen('close', () => {
        window.close();
    });
}

app.start(createWindow);

// Handle macOS specific close event
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
