<template>
  <div
    class="container py-6 px-2 mx-auto flex items-center justify-between gap-y-5 flex-wrap"
  >
    <UiTabs
      :tabs="[
        { name: 'Home', label: 'dashboard', route: { name: 'Home' } },
        { name: 'Sponsors', label: 'homiylar', route: { name: 'Sponsors' } },
        { name: 'Students', label: 'talabalar', route: { name: 'Students' } },
      ]"
    />
    <div class="flex items-center gap-5 flex-wrap gap-y-5">
      <div class="flex items-center gap-2 bg-[#E8E8E8] px-2.5 rounded-md">
        <img src="@/assets/icons/search_icon.svg" alt="search_icon" />
        <UiInput placeholder="Izlash" size="search" />
      </div>

      <UiButton size="filter" color="purple" class="flex gap-2.5">
        <img src="@/assets/icons/filter_icon.svg" alt="filter_icon" />
        Filter
      </UiButton>
    </div>
  </div>
</template>

<script setup>
import UiTabs from '@/components/UI/UiTabs.vue'
import UiInput from '@/components/UI/UiInput.vue'
import UiButton from '@/components/UI/UiButton.vue'
</script>
