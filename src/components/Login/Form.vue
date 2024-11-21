<template>
  <form class="flex flex-col gap-[22px] pt-11" @submit.prevent="handleSubmit">
    <BaseInput
      label="login"
      type="text"
      placeholder="Enter your login"
      v-model="login"
    />
    <BaseInput
      label="parol"
      type="password"
      placeholder="Enter your password"
      v-model="password"
    />

    <BaseButton size="xl" fullWidth> Kirish </BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/base/Input.vue'
import BaseButton from '@/components/base/Button.vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const login = ref('Nodir')
const password = ref('123test')
const handleSubmit = () => {
  if (login.value === 'Nodir' && password.value === '123test') {
    authStore.login()
    router.push({ name: 'Home' })
  } else {
    alert('Invalid login or password.')
  }
}
</script>
