<template>
  <nav class="container flex py-6 mx-auto justify-between items-center">
    <RouterLink :to="{ name: 'Home' }" class="px-4">
      <img src="@/assets/svg/logo_header.svg" alt="logo header" />
    </RouterLink>
    <div class="flex gap-10 items-center">
      <RouterLink :to="{ name: 'Profile' }">
        <div
          class="flex gap-6 py-1 px-1 items-center bg-[rgba(241,241,243,1)] rounded-md"
        >
          <p class="pl-5 font-sf-bold text-[rgba(40,41,61,1)] leading-5">
            {{ userName }}
          </p>
          <div class="px-1 pt-2 rounded bg-[rgba(0,174,105,1)]">
            <img
              src="@/assets/icons/user_icon.svg"
              alt="user_icon"
              class="min-w-[22px] min-h-6"
            />
          </div>
        </div>
      </RouterLink>
      <button @click="logout">
        <img
          src="@/assets/icons/logout_icon.svg"
          alt="logout_icon"
          class="min-w-8 min-h-8"
        />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'

const userName = ref('Nodir')
const authStore = useAuthStore()
const router = useRouter()

const logout = () => {
  authStore.logout()
  router.push({ name: 'Login' })
}
</script>
