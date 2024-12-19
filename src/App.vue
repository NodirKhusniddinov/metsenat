<template>
  <div class="bg-white">
    <Header v-if="!route.meta.hideHeader" />
    <ToolBar v-if="!route.meta.hideToolbar" />
  </div>
  <Transition name="fade">
    <RouterView />
  </Transition>
</template>
<script setup>
import { useRoute } from 'vue-router'
import Header from '@/components/Header/Header.vue'
import ToolBar from '@/components/ToolBar/ToolBar.vue'
const route = useRoute()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
