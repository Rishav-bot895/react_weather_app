import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react_weather_app/', // Add your repo name here
  plugins: [react()]
});
