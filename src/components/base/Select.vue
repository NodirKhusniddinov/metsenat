<template>
  <div class="relative w-full font-rubik text-[#2E384D]">
    <button
      @click="toggleDropdown"
      class="w-full px-4 py-3 border border-[#E0E7FF] bg-[#E0E7FF33] rounded focus:outline-none flex items-center justify-between text-[16px] transition duration-300 ease-in-out"
      :class="{ active: isOpen }"
    >
      {{ selectedLabel }}
      <img
        src="@/assets/icons/arrow_icon.svg"
        alt="arrow icon"
        :class="{ 'rotate-180': isOpen }"
        class="transition-transform duration-300"
      />
    </button>
    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="absolute left-0 mt-1 z-10 w-full bg-white rounded-md max-h-32 overflow-y-auto [box-shadow:0px_4px_24px_0px_#00000014] text-[14px] border-[0.5px] border-[#E0E7FF]"
      >
        <ul>
          <li
            v-for="(option, index) in options"
            :key="index"
            @click="selectOption(option)"
            class="px-4 py-3 cursor-pointer hover:bg-[#E0E7FF33] border-[0.5px] border-[#E0E7FF]"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  modelValue: [String, Number],
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: 'Select a value',
  },
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

watch(
  () => props.options,
  newOptions => {
    if (newOptions.length > 0 && props.modelValue == null) {
      emit('update:modelValue', newOptions[0].value)
    }
  },
  { immediate: true },
)

const selectedLabel = computed(() => {
  const selectedOption = props.options.find(
    option => option.value === props.modelValue,
  )
  return selectedOption ? selectedOption.label : props.label
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = option => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}
</script>

<style scoped>
.dropdown-enter-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
.dropdown-enter-from {
  transform: scaleY(0);
  opacity: 0;
}
.dropdown-enter-to {
  transform: scaleY(1);
  opacity: 1;
}

.dropdown-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
.dropdown-leave-from {
  transform: scaleY(1);
  opacity: 1;
}
.dropdown-leave-to {
  transform: scaleY(0);
  opacity: 0;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transform-origin: top;
}
.active {
  @apply border border-[#2E5BFF] bg-[#F9FAFF];
}
</style>
