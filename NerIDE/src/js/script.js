import { appDataDir, join } from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/core';

const invoke = window.__TAURI__.invoke
const appDataDirPath = await appDataDir();

function App() {
  // Now we can call our Command!
  // Right-click the application background and open the developer tools.
  // You will see "Hello, World!" printed in the console!
  console.log(appDataDirPath)
  invoke('greet', { name: 'World' })
    // `invoke` returns a Promise
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

App();
console.log("Script.js is up!");
