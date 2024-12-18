<template>
  <div class="flex flex-wrap gap-3">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      :class="[
        'tab-button',
        { active: activeTab === index },
        { 'first-tab': index === 0 },
      ]"
      @click="selectTab(index)"
    >
      {{ tab }}
      <span v-if="index !== 0" class="text-[12px] text-[#2E5BFF] font-rubik"
        >UZS</span
      >
      <div
        :class="{ hidden: activeTab !== index }"
        class="absolute top-[-7px] right-[-7px] w-4 h-4 bg-[#2E5BFF] rounded-[50%] flex items-center justify-center"
      >
        <img src="@/assets/icons/select_icon.svg" alt="select icon" />
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

defineProps({
  tabs: {
    type: Array,
    required: true,
  },
})

const activeTab = ref(0)

const selectTab = index => {
  activeTab.value = index
}
</script>

<style scoped>
.tab-button {
  @apply relative py-4 px-4 font-rubik-medium text-[#2E384D] border rounded-md text-[14px] transition ease-in-out duration-300 text-center;
}
.tab-button.active {
  @apply border-2 border-[#2E5BFF];
}
.tab-button.first-tab {
  @apply px-5 bg-[#E0E7FF];
}
</style>
