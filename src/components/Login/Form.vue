<template>
  <form class="flex flex-col gap-[22px] pt-11" @submit.prevent="handleSubmit">
    <UiInput label="login" placeholder="adm8904" v-model="login" />
    <UiInput
      label="parol"
      type="password"
      placeholder="Enter your password"
      v-model="password"
    />

    <UiButton size="xl" fullWidth> Kirish </UiButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import UiInput from '@/components/UI/UiInput.vue'
import UiButton from '@/components/UI/UiButton.vue'

const login = ref('')
const password = ref('')
const handleSubmit = () => {
  console.log('Login:', login.value)
  console.log('Password:', password.value)
  login.value = ''
  password.value = ''
}
</script>
