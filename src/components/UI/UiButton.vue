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
  'ui-button': true,
  'ui-button-rounded': props.rounded,
  'w-full': props.fullWidth,
  [`ui-button-${props.size}`]: true,
  [`ui-button-${props.variant}`]: true,
  [`ui-button-${props.color}`]: true,
}))
</script>

<style scoped>
.ui-button {
  @apply inline-flex items-center justify-center font-medium rounded-md whitespace-nowrap active:scale-95;
  @apply duration-200 ease-in-out;
}
.ui-button-sm {
  @apply h-9 px-3 py-2 text-sm leading-none;
}
.ui-button-md {
  @apply h-10 px-[14px] py-2.5 text-sm leading-none;
}
.ui-button-lg {
  @apply h-11 px-4 py-2.5 text-base leading-none;
}
.ui-button-xl {
  @apply h-12 px-[18px] py-3 text-base leading-none;
}
.ui-button-solid.ui-button-primary {
  @apply bg-blue-600 text-white hover:bg-blue-700;
}
.ui-button-solid.ui-button-secondary {
  @apply bg-zinc-800 text-white hover:bg-zinc-900;
}
.ui-button-solid.ui-button-success {
  @apply bg-emerald-600 text-white hover:bg-emerald-700;
}
.ui-button-solid.ui-button-warning {
  @apply bg-amber-500 text-white hover:bg-amber-600;
}
.ui-button-solid.ui-button-danger {
  @apply bg-red-600 text-white hover:bg-red-700;
}
.ui-button-white {
  @apply bg-white border hover:bg-zinc-100 shadow-sm;
}
.ui-button-white.ui-button-primary {
  @apply text-blue-600;
}
.ui-button-white.ui-button-secondary {
  @apply text-zinc-500;
}
.ui-button-white.ui-button-success {
  @apply text-emerald-600;
}
.ui-button-white.ui-button-warning {
  @apply text-amber-500;
}
.ui-button-white.ui-button-danger {
  @apply text-red-600;
}
.ui-button-rounded {
  @apply rounded-full;
}
</style>
