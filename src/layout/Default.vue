<template>
  <div class="bg-white">
    <Header />
    <ToolBar />
  </div>
  <main>
    <slot />
  </main>
</template>

<script setup>
import Header from '@/components/Header/Header.vue'
import ToolBar from '@/components/ToolBar/ToolBar.vue'
</script>
