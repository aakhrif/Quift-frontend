
import { defineNuxtRouteMiddleware } from '#app';
import { navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useAuth()
  if (!isLoggedIn.value) {
    return navigateTo('/login')
  }

})
