<template>
  <div class="flex flex-col items-center justify-center gap-9 min-h-screen">
    <LoginGroupLogo />
    <UiCard p="8">
      <UiCardHeader>Kirish</UiCardHeader>
      <LoginForm />
    </UiCard>
  </div>
</template>

<script setup>
import LoginForm from '@/components/Login/Form.vue'
import LoginGroupLogo from '@/components/Login/GroupLogo.vue'
import UiCard from '@/components/UI/UiCard.vue'
import UiCardHeader from '@/components/UI/UiCardHeader.vue'
</script>
