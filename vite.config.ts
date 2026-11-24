import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: [
        'timeinamo-logo.png',
        'timeinamo-icon.png',
        'icons/timeinamo-96.png',
        'icons/timeinamo-432.png',
      ],
      manifest: {
        name: 'TimeInamo',
        short_name: 'TimeInamo',
        description: 'Track Time. Record Progress.',
        theme_color: '#0F766E',
        background_color: '#FFFFFF',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'icons/timeinamo-96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icons/timeinamo-432.png',
            sizes: '432x432',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'icons/timeinamo-432.png',
            sizes: '432x432',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
        cleanupOutdatedCaches: true,
        navigateFallback: 'index.html',
      },
    }),
  ],
})
