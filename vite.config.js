import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
plugins: [
    react(),
    VitePWA({
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
      
    ] 
 }
})
