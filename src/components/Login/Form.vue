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

const login = ref('')
const password = ref('')
const handleSubmit = () => {
  console.log('Login:', login.value)
  console.log('Password:', password.value)
  login.value = ''
  password.value = ''
}
</script>
