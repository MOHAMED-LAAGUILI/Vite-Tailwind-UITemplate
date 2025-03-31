/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from 'rollup-plugin-visualizer';
import vitePluginCompression from 'vite-plugin-compression';
import pkg from './package.json';
import viteImagemin from "vite-plugin-imagemin";
import path from "path";

const dependencies = Object.keys(pkg.dependencies || {});
const devDependencies = Object.keys(pkg.devDependencies || {});

const allDependencies = [
  ...dependencies,
  ...devDependencies,
].filter(dep => !dep.startsWith('@types/'));

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 10000, // Set to a larger value (in KB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
          if (id.includes('Pages/')) return `page-${id.split('/').pop().replace('.jsx', '')}`;
          if (id.includes('Components/')) return `component/${id.split('/').slice(-2, -1)[0]}`;
          if (id.includes('locals')) return 'translations';
          if (id.includes('Layout')) return `layout-${id.split('layout/').pop().replace('.jsx', '').replace(/\//g, '-')}`;
          if (id.includes('mock')) return `mock-${id.split('mock/').pop().replace('.jsx', '').replace(/\//g, '-')}`;
        },
      },
    },
    minify: 'esbuild', // Use esbuild for faster minification (default in Vite)
    target: "esnext", // Modern browsers

  },

  plugins: [
    react(),
    VitePWA({
      workbox: {
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10 MB
        skipWaiting: true, // Forces the service worker to activate immediately
        clientsClaim: true, // Claims any open clients immediately
       
      },
      injectRegister: 'auto',
      registerType: 'autoUpdate', // Auto-update the service worker
      devOptions: {
        enabled: true,
      },
      includeAssets: ['*.svg', '*.png'],
      manifest: {
        name: "One UI",
        short_name: "One UI",
        description: `One UI is a modern, fully responsive UI framework designed 
        for simplicity and efficiency. Whether you are a developer or designer, 
        One UI provides you with all the tools you need to build beautiful and 
        functional websites.`,
        start_url: '/', // Define the start URL for the app
        display: 'standalone', // Open the app in standalone mode
        orientation: 'portrait', // Force portrait orientation for the app
        theme_color: "#ffffff",
        background_color: '#ffffff', // Background color during launch
        version: '2.0.0', // Set your PWA version here
        icons: [
          {
            src: "OneUI-dark.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
 
    vitePluginCompression({
      algorithm: 'brotliCompress', // Use 'brotli' or 'gzip'
      ext: '.br', // Brotli file extension
      threshold: 1024, // Compress files larger than 1KB
      deleteOriginFile: false, // Keep the original file (set to true if you want to remove the uncompressed file)
    }),
    vitePluginCompression({
      algorithm: "gzip", // Fallback Gzip compression
      ext: ".gz",
      threshold: 1024,
    }),
    
    visualizer({
   filename: './dist/stats.html',
   open: true, // Automatically open in the browser
   gzipSize: true,
   brotliSize: true,
 }),

 viteImagemin({
  gifsicle: { optimizationLevel: 3 },
  optipng: { optimizationLevel: 7 },
  mozjpeg: { quality: 85 },
  svgo: { plugins: [{ name: "removeViewBox" }, { name: "removeEmptyAttrs" }] },
}),
],
mode: "jit", // Enables Just-In-Time mode (faster builds)

resolve: {
  alias: {
    "@": path.resolve(__dirname, "src"), // Simplifies imports
  },
},
  optimizeDeps: {
    include: allDependencies, // Includes all dependencies for optimization
  }
})
