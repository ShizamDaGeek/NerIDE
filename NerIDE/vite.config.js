import { defineConfig } from "vite";
// import { copy } from "vite-plugin-copy";
//import viteCopyPlugin from '@col0ring/vite-plugin-copy'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(async () => ({
  plugins: [

    viteStaticCopy({
      targets: [
        {
          src: './src/index.html', dest: '' ,
        },
        {
          src: './src/CSS/stylesheet.css', dest: 'CSS/' ,
        }
      ]
    })
  ],

  envPrefix: ['VITE_', 'TAURI_PLATFORM', 'TAURI_ARCH', 'TAURI_FAMILY', 'TAURI_PLATFORM_VERSION', 'TAURI_PLATFORM_TYPE', 'TAURI_DEBUG'],

  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    open: 'src/index.html',
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },


  // Specify entry point
  build: {
        // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
    rollupOptions: {
      input: {
        app: 'src/index.html', // Specify the correct input file path
        script: 'src/main.js',
      },
    },
    // output: {
    //   entryFileNames: '[name]-bundle.js', // Specify the output file name format
    // },
    outDir: 'dist', // Specify the output directory
    assetsDir: 'assets' // Specify the directory for static assets (e.g., CSS, images)
  }
  
}));
