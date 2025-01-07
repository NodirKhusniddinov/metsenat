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

          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { defineEmits, defineProps, watch, onUnmounted, onMounted } from 'vue'

const props = defineProps({
  isVisible: { type: Boolean, default: false },
})

const emits = defineEmits(['closeModal'])

const closeModal = () => {
  emits('closeModal')
}

watch(
  () => props.isVisible,
  newVal => {
    if (newVal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
  { immediate: true },
)

onMounted(() => {
  if (props.isVisible) {
    document.body.style.overflow = 'hidden'
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
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
