(async () => {
    console.log("e")
    const { appDataDir, join } = window.__TAURI__.path;
    const { convertFileSrc } = window.__TAURI__.core;
  
    const appDataDirPath = await appDataDir();
    const filePath = await join(appDataDirPath, 'assets/video.mp4');
    const assetUrl = convertFileSrc(filePath);
  })();
  
// Below is the attempt to get electron code working in tauri
// const { app } = window.__TAURI__;
// const { getTauriVersion } = window.__TAURI__.app; 
// // Define your Tauri application
// (async () => {
//     // Create a new window
//     const myWindow = window.create({
//         title: "My Tauri App",
//         url: `app://./index.html`, // Loading the index.html file from the app directory
//         width: 800,
//         height: 600,
//         resizable: true,
//         fullscreen: false,
//         transparent: false,
//         decorations: true,
//         alwaysOnTop: false,
//     });

//     // Listen for when the window is closed
//     myWindow.on("closed", () => {
//         console.log("Window closed");
//     });

//     // Show the window
//     await myWindow.open();
// })();
