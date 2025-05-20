export const useAuth = () => {
  const token = useState<string | null>('auth_token', () => null)

  const isLoggedIn = computed(() => !!token.value)

  const setToken = (t: string) => {
    token.value = t
    if (process.client) {
      localStorage.setItem('jwt', t)
    }
  }

  const loadToken = () => {
    if (process.client) {
      const t = localStorage.getItem('jwt')
      if (t) token.value = t
    }
  }

  return {
    token,
    isLoggedIn,
    setToken,
    loadToken
  }
}
