    // Making the window
    const path = require('path');
    const { app, BrowserWindow } = require('electron');

    function createMainWindow()
    {
        const mainWindow = new BrowserWindow
        ({
            title: 'NerIDE',
            width: 800,
            height: 600,
        });

        mainWindow.loadFile(path.join(__dirname, 'index.html'));
    }

    app.whenReady().then(() => 
    {
        createMainWindow();
    });

$(document).ready(function() 
{
    // Function to open the pop-up
    $('#open-file-popup').click(function() 
    {
        $('#file-button').fadeIn();
    });

    // Function to close the pop-up
    $('#close-file-popup').click(function() 
    {
        $('#file-button').fadeOut();
    });
});
