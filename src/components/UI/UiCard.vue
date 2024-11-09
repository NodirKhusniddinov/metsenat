<template>
  <div
    :class="[
      'bg-white rounded-xl border border-[rgba(235,238,252,1)] mx-auto sm:w-[300px] max-sm:w-[300px] xl:w-[381px]  w-[381px]',
      `py-${p}`,
      `px-${p}`,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  p: {
    type: String,
    default: '6',
  },
})
</script>
