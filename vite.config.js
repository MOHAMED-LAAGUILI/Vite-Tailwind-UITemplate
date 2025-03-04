import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),

    compression({
      algorithm: "brotliCompress", // Use Brotli (better than gzip)
      threshold: 1024, // Compress files over 1KB
    }),

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
