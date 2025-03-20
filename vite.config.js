import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from 'rollup-plugin-visualizer';
import vitePluginCompression from 'vite-plugin-compression';
import pkg from './package.json';

const dependencies = Object.keys(pkg.dependencies || {});
const devDependencies = Object.keys(pkg.devDependencies || {});
const allDependencies = [...dependencies, ...devDependencies];

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 5000, // Set to a larger value (in KB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Chunking for node_modules to create a vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Add specific pages or components to separate chunks
          if (id.includes('Pages/')) {
            const pageName = id.split('/').pop().replace('.jsx', ''); // Get the page name from the path
            return `page-${pageName}`;
          }
         
          if (id.includes('Components')) {
            return 'Components';
          }
        },
      },
    },
    minify: 'esbuild', // Use esbuild for faster minification (default in Vite)
  },
  plugins: [
    react(),
    VitePWA({
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
        skipWaiting: true, // Forces the service worker to activate immediately
        clientsClaim: true, // Claims any open clients immediately
      },
      registerType: 'autoUpdate', // Auto-update the service worker
      includeAssets: ['*.svg', '*.png', 'robots.txt', 'sitemap.xml'],
      manifest: {
        name: "One UI",
        description: `One UI is a modern, fully responsive UI framework designed 
        for simplicity and efficiency. Whether you are a developer or designer, 
        One UI provides you with all the tools you need to build beautiful and 
        functional websites.`,
        short_name: "One UI",
        theme_color: "#ffffff",
        background_color: '#ffffff', // Background color during launch
        version: '1.2.0', // Set your PWA version here
        icons: [
          {
            src: "OneUI-light.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
 
    vitePluginCompression({
      algorithm: 'gzip', // Use 'brotli' or 'gzip'
      threshold: 10240,  // Compress files larger than 10 KB
    }),
    
    visualizer({
   filename: './dist/stats.html',
   open: true, // Automatically open in the browser
 }),
],
  
  optimizeDeps: {
    include: allDependencies, // Includes all dependencies for optimization
  }
})
