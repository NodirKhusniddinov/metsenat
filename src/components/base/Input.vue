<template>
  <div class="base-input-wrapper">
    <label v-if="label" :for="inputId" class="base-input-label">
      {{ label.toUpperCase() }}
    </label>
    <input
      v-bind="$attrs"
      :type="type"
      :id="inputId"
      :class="inputClasses"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  size: { type: String, default: 'md' }, //  'sm', 'md', 'lg', 'xl'
  type: { type: String, default: 'text' }, //  'text', 'email', 'password'
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  modelValue: String,
})

const inputId = `base-input-${Math.random().toString(36).substring(2, 15)}`

const inputClasses = computed(() => ({
  'base-input': true,
  [`base-input-${props.size}`]: true,
}))
</script>

<style scoped>
.base-input-wrapper {
  @apply flex flex-col gap-2;
}

.base-input-label {
  @apply text-sm leading-[14.22px] tracking-[2px] font-rubik-medium text-gray-700;
}

.base-input {
  @apply w-full px-3 py-2 border border-[rgba(224,231,255,1)] bg-[rgba(224,_231,_255,_0.2)] rounded-md outline-none font-rubik text-[rgba(46,56,77,1)];
}

.base-input-sm {
  @apply h-8 text-sm;
}

.base-input-md {
  @apply h-10 text-base;
}

.base-input-lg {
  @apply h-12 text-lg;
}

.base-input-xl {
  @apply h-14 text-xl;
}
.base-input-search {
  @apply h-10 text-base border-0 bg-[#E8E8E8] px-0 w-60 max-sm:w-36 sm:w-48 xl:w-60;
}
</style>
