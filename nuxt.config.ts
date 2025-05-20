import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: true,
  css: ['@/assets/css/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  runtimeConfig: {
   public: {
     apiUrl: process.env.API_URL || 'http://localhost:8080'
   }
 },

  modules: ['@nuxt/image'],
})