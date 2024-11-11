<template>
  <div class="flex flex-col items-center justify-center gap-9 min-h-screen">
    <LoginGroupLogo />
    <div class="card_wrapper py-8 px-8">
      <UiCardHeader>Kirish</UiCardHeader>
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/Login/Form.vue'
import LoginGroupLogo from '@/components/Login/GroupLogo.vue'
import UiCardHeader from '@/components/UI/UiCardHeader.vue'
</script>
