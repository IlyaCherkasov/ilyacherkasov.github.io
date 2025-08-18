import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const manifest: Partial<ManifestOptions> = {
  name: 'Ilya Cherkasov Portfolio',
  short_name: 'Ilya Cherkasov Portfolio',
  icons: [
    {
      src: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
  theme_color: '#f0bfd6',
  background_color: '#9e3a58',
  start_url: '/',
  display: 'standalone',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: null,
      manifest,
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'service-worker.ts',
    }),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
