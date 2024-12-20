<template>
  <div class="flex items-center gap-4">
    <div
      class="py-3.5 px-2.5 rounded-[12px]"
      :style="{ background: `${color}1A` }"
    >
      <MoneyIcon :color="color" />
    </div>
    <div class="flex flex-col gap-1.5">
      <p
        class="font-rubik text-[12px] sm:text-[10px] max-sm:text-[10px] lg:text-[12px] leading-3"
      >
        {{ text }}
      </p>
      <h6
        class="font-sf-bold text-[20px] sm:text-[14px] max-sm:text-[14px] lg:text-[20px] leading-5 text-[#2E384D]"
      >
        {{ price }} <span class="text-[#B2B7C1]">UZS</span>
      </h6>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import MoneyIcon from '@/assets/icons/MoneyIcon.vue'
const props = defineProps({
  color: {
    type: String,
    default: '#4C6FFF',
  },
  text: String,
  price: String,
})
</script>

<style></style>
