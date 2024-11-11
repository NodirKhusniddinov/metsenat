<template>
  <div class="bg-white">
    <Header v-if="!route.meta.hideHeader" />
    <ToolBar v-if="!route.meta.hideToolbar" />
  </div>
  <RouterView />
</template>
<script setup>
import Header from '@/components/Header/Header.vue'
import { useRoute } from 'vue-router'
import ToolBar from '@/components/ToolBar/ToolBar.vue'
const route = useRoute()
</script>

<
