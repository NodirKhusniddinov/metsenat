<template>
  <ModalWrapper>
    <p class="label">Talabalik turi</p>
    <BaseSelect v-model="selected" :options="options" />
    <p class="label">OTM</p>
    <BaseSelect v-model="selected" :options="options" />
  </ModalWrapper>
</template>

<script setup>
import { ref } from 'vue'
import BaseSelect from '@/components/base/Select.vue'
import ModalWrapper from '@/components/Modal/ModalWrapper.vue'

const selected = ref(null)
const options = ref([
  { label: 'Barchasi', value: 'option1' },
  { label: 'Yangi', value: 'option2' },
  { label: 'Moderatsiyada', value: 'option3' },
  { label: 'Tasdiqlangan', value: 'option4' },
  { label: 'Bekor qilingan', value: 'option5' },
  { label: 'Bekor qilingan', value: 'option5' },
  { label: 'Bekor qilingan', value: 'option5' },
])
</script>
