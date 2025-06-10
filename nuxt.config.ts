import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: true,
  devServer: {
    port: 3000,
    host: '0.0.0.0', // WICHTIG!
  },
  css: ['@/assets/css/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  runtimeConfig: {
   public: {
     apiUrl: process.env.API_BASE_URL || 'http://localhost:8080'
   }
 },

  modules: ['@nuxt/image'],
})