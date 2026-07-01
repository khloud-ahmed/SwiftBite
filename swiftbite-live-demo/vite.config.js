import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        signin: resolve(__dirname, 'signin.html'),
        signup: resolve(__dirname, 'signup.html'),
        menu: resolve(__dirname, 'menu.html'),
        checkout: resolve(__dirname, 'checkout.html'),
        track: resolve(__dirname, 'track.html'),
        admin: resolve(__dirname, 'admin.html'),
        'partner-menu': resolve(__dirname, 'partner-menu.html'),
        'partner-orders': resolve(__dirname, 'partner-orders.html'),
      },
    },
  },
});
