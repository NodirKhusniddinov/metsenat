<template>
  <div class="tabs-wrapper">
    <div
      v-for="tab in tabs"
      :key="tab.name"
      class="tab"
      :class="{ 'tab-active': isActive(tab) }"
    >
      <RouterLink :to="tab.route" v-bind="$attrs" :class="tabClasses(tab)">
        <div class="w-full py-3.5">
          {{ tab.label.toUpperCase() }}
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
})

const route = useRoute()

const isActive = tab => route.name === tab.name

const tabClasses = tab =>
  computed(() => ({
    'tab-active': isActive(tab),
  }))
</script>

<style scoped>
.tabs-wrapper {
  @apply flex;
}

.tab {
  @apply w-48 max-sm:w-28  border-y-2 border-x border-[rgba(224,231,255,1)] text-center text-[12px] leading-3 font-rubik-medium tracking-[1.13px] text-[rgba(51,102,255,0.6)];
  @apply transition ease-in-out  hover:text-[#2563eb];
}
.tab:first-child {
  @apply rounded-l-md border-l-2;
}
.tab:last-child {
  @apply rounded-r-md border-r-2;
}
.tab-active {
  @apply bg-[#2563eb] text-white border-[#2563eb];
  @apply hover:text-white;
}
</style>
