<template>
  <div class="ui-input-wrapper">
    <label v-if="label" :for="inputId" class="ui-input-label">
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

const inputId = `ui-input-${Math.random().toString(36).substring(2, 15)}`

const inputClasses = computed(() => ({
  'ui-input': true,
  [`ui-input-${props.size}`]: true,
}))
</script>

<style scoped>
.ui-input-wrapper {
  @apply flex flex-col gap-2;
}

.ui-input-label {
  @apply text-sm leading-[14.22px] tracking-[2px] font-rubik-medium text-gray-700;
}

.ui-input {
  @apply w-full px-3 py-2 border border-[rgba(224,231,255,1)] bg-[rgba(224,_231,_255,_0.2)] rounded-md outline-none font-rubik text-[rgba(46,56,77,1)];
}

.ui-input-sm {
  @apply h-8 text-sm;
}

.ui-input-md {
  @apply h-10 text-base;
}

.ui-input-lg {
  @apply h-12 text-lg;
}

.ui-input-xl {
  @apply h-14 text-xl;
}
.ui-input-search {
  @apply h-10 text-base border-0 bg-[#E8E8E8] px-0 w-60 max-sm:w-36 sm:w-48 xl:w-60;
}
</style>
