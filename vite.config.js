import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({

  build: {
    rollupOptions: {
      external: ['ldrs/linespinner']
    }
  },

  plugins: [
    
    react(),

    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      manifest: {
        name: "My Vite App",
        short_name: "ViteApp",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],

  optimizeDeps: {
    include: ['@ag-grid-community/core']
  }
})
