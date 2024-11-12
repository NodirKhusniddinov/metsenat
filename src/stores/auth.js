import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated:
      JSON.parse(localStorage.getItem('isAuthenticated')) || false,
  }),
  actions: {
    login() {
      this.isAuthenticated = true
      localStorage.setItem('isAuthenticated', JSON.stringify(true))
    },
    logout() {
      this.isAuthenticated = false
      localStorage.removeItem('isAuthenticated')
    },
  },
})
