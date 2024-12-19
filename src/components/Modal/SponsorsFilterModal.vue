<template>
  <ModalWrapper>
    <p class="label">Ariza holati</p>
    <BaseSelect v-model="selected" :options="options" />
    <p class="label">Homiylik summasi</p>
    <FilterTabs :tabs="tabLabels" @tabSelected="handleTabSelected" />

    <p class="label">Sana</p>
    <BaseInput type="date" />
  </ModalWrapper>
</template>

<script setup>
import { ref } from 'vue'
import BaseSelect from '@/components/base/Select.vue'
import BaseInput from '@/components/base/Input.vue'
import FilterTabs from '@/components/common/FilterTabs.vue'
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
const tabLabels = [
  'Barchasi',
  '1 000 000',
  '5 000 000',
  '7 000 000',
  '10 000 000',
  '30 000 000',
  '50 000 000',
]

const handleTabSelected = index => {
  console.log('Selected tab index:', index)
}
</script>
