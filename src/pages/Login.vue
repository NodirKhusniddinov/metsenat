<template>
  <div class="flex flex-col items-center justify-center gap-9 min-h-screen">
    <LoginLogo />
    <div class="card_wrapper py-8 px-8">
      <div class="card_title">Kirish</div>
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/Login/Form.vue'
import LoginLogo from '@/components/Login/LoginLogo.vue'
</script>
