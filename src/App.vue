<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink :to="{ name: 'Login' }">Login</RouterLink>
  <RouterView />
</template>
<script setup></script>

<style scoped></style>
