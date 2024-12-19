<template>
  <div class="w-full">
    <div
      class="container py-6 px-2 mx-auto flex items-center justify-between gap-y-5 flex-wrap"
    >
      <CommonTabs
        :tabs="[
          { name: 'Home', label: 'dashboard', route: { name: 'Home' } },
          { name: 'Sponsors', label: 'homiylar', route: { name: 'Sponsors' } },
          { name: 'Students', label: 'talabalar', route: { name: 'Students' } },
        ]"
      />
      <div
        v-if="!route.meta.hideSearchAndFilter"
        class="flex items-center gap-5 flex-wrap"
      >
        <div class="flex items-center gap-2 bg-[#E8E8E8] px-2.5 rounded-md">
          <img src="../../assets/icons/search_icon.svg" alt="search_icon" />
          <BaseInput placeholder="Izlash" size="search" />
        </div>

        <BaseButton
          size="filter"
          color="purple"
          class="flex gap-2.5"
          @click="showModal = !showModal"
        >
          <img src="../../assets/icons/filter_icon.svg" alt="filter_icon" />
          Filter
        </BaseButton>
      </div>
    </div>
  </div>

  <SponsorsFilterModal
    :isVisible="showModal"
    @closeModal="showModal = false"
    v-if="route.path === `/sponsors`"
  />
  <StudentsFilterModal
    :isVisible="showModal"
    @closeModal="showModal = false"
    v-if="route.path === `/students`"
  />
</template>

<script setup>
import CommonTabs from '@/components/common/Tabs.vue'
import BaseInput from '@/components/base/Input.vue'
import BaseButton from '@/components/base/Button.vue'
import SponsorsFilterModal from '@/components/Modal/SponsorsFilterModal.vue'
import StudentsFilterModal from '@/components/Modal/StudentsFilterModal.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.path)
const showModal = ref(false)
</script>
