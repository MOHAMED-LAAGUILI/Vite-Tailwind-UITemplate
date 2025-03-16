import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

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
          // You can also add more chunking conditions for other parts of the application, like libraries or utils
          if (id.includes('utils')) {
            return 'utils';
          }
          if (id.includes('components')) {
            return 'components';
          }
        },
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
      },
      registerType: "autoUpdate",
      includeAssets: ["OneUI.png", "robots.txt"],
      manifest: {
        name: "One UI",
        short_name: "One UI",
        theme_color: "#ffffff",
        icons: [
          {
            src: "OneUI.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],

  optimizeDeps: {
    include: [
      '@ag-grid-community/core',
      // Add other dependencies that should be optimized here
    ]
  }
})
