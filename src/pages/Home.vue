<template>
  <UiButton>Kirish</UiButton>
  <UiButton rounded size="xl" color="success" variant="solid"
    >Enter Something</UiButton
  >
  <ui-input
    label="Email"
    type="email"
    placeholder="Enter your email"
    size="lg"
  />
  <ui-input
    label="Password"
    type="password"
    placeholder="Enter your password"
    size="md"
  />
</template>

<script setup>
import UiButton from '@/components/UI/UiButton.vue'
import UiInput from '@/components/UI/UiInput.vue'
</script>

<style scoped></style>
