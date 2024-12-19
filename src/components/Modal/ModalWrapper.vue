<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        class="modal-overlay"
        v-show="props.isVisible"
        @click.self="closeModal"
      >
        <div
          class="bg-white rounded-xl border border-[rgba(235,238,252,1)] mx-auto px-7 py-7 w-[586px]"
        >
          <div class="flex justify-between items-center w-full pb-7">
            <h3 class="card_title">Filter</h3>
            <button @click="closeModal">
              <img src="../../assets/icons/x_icon.svg" alt="x_icon" />
            </button>
          </div>
          <div class="border-y-2 border-[#F5F5F7] pb-7">
            <slot></slot>
          </div>
          <div class="flex items-center justify-end gap-4 mt-7">
            <BaseButton class="flex gap-2.5" variant="white">
              <img src="../../assets/icons/clear_icon.svg" alt="clear icon" />
              Tozalash
            </BaseButton>
            <BaseButton class="flex gap-2.5">
              <img src="../../assets/icons/eye_icon.svg" alt="eye icon" />
              Natijalarni ko‘rish
            </BaseButton>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
import BaseButton from '@/components/base/Button.vue'

const props = defineProps({
  isVisible: { type: Boolean, default: false },
})

const emits = defineEmits(['closeModal'])

const closeModal = () => {
  emits('closeModal')
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
