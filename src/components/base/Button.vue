<template>
  <button v-bind="$attrs" :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  color: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  rounded: { type: Boolean, default: false },
  variant: { type: String, default: 'solid' },
  fullWidth: { type: Boolean, default: false },
})

const buttonClasses = computed(() => ({
  'base-button': true,
  'base-button-rounded': props.rounded,
  'w-full': props.fullWidth,
  [`base-button-${props.size}`]: true,
  [`base-button-${props.variant}`]: true,
  [`base-button-${props.color}`]: true,
}))
</script>

<style scoped>
.base-button {
  @apply inline-flex items-center justify-center font-medium rounded-md whitespace-nowrap active:scale-95;
  @apply duration-200 ease-in-out;
}
.base-button-sm {
  @apply h-9 px-3 py-2 text-sm leading-none;
}
.base-button-md {
  @apply h-10 px-[14px] py-2.5 text-sm leading-none;
}
.base-button-lg {
  @apply h-11 px-4 py-2.5 text-base leading-none;
}
.base-button-xl {
  @apply h-12 px-[18px] py-3 text-base leading-none;
}
.base-button-filter {
  @apply px-8 py-3 text-base leading-none;
}
.base-button-solid.base-button-primary {
  @apply bg-blue-600 text-white hover:bg-blue-700;
}
.base-button-solid.base-button-secondary {
  @apply bg-zinc-800 text-white hover:bg-zinc-900;
}
.base-button-solid.base-button-success {
  @apply bg-emerald-600 text-white hover:bg-emerald-700;
}
.base-button-solid.base-button-warning {
  @apply bg-amber-500 text-white hover:bg-amber-600;
}
.base-button-solid.base-button-danger {
  @apply bg-red-600 text-white hover:bg-red-700;
}
.base-button-white {
  @apply bg-white border hover:bg-zinc-100 shadow-sm;
}
.base-button-white.base-button-primary {
  @apply text-blue-600;
}
.base-button-white.base-button-secondary {
  @apply text-zinc-500;
}
.base-button-white.base-button-success {
  @apply text-emerald-600;
}
.base-button-white.base-button-warning {
  @apply text-amber-500;
}
.base-button-white.base-button-danger {
  @apply text-red-600;
}
.base-button-solid.base-button-purple {
  @apply bg-[#EDF1FD] text-blue-600 hover:bg-blue-100;
}
.base-button-white.base-button-purple {
  @apply text-[#EDF1FD];
}
.base-button-rounded {
  @apply rounded-full;
}
</style>
