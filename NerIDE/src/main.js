const { app, window } = require('@tauri-apps/api');

async function createWindow() 
{
    await window.create
    ({
        title: 'NerIDE',
        resizable: true,
    });

    // LOAD HTML
    await window.loadURL('index.html');

    // HANDEL WINDOWS EVENTS
    window.on('close-requested', () => 
    {
        window.close();
    });
}

app.start(createWindow);

// Handle macOS specific close event
app.on('window-all-closed', () => 
{
    if (process.platform !== 'darwin') 
    {
        app.quit();
    }
});
