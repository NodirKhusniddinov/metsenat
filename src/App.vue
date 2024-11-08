<template>
  <Header v-if="!route.meta.hideHeader" />

  <RouterView />
</template>
<script setup>
import Header from '@/components/Header/Header.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<
