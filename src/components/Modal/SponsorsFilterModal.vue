<template>
  <ModalWrapper>
    <div class="border-y-2 border-[#F5F5F7] pb-7">
      <p class="label">Ariza holati</p>
      <BaseSelect v-model="selected" :options="options" />
      <p class="label">Homiylik summasi</p>
      <FilterTabs :tabs="tabLabels" @tabSelected="handleTabSelected" />

      <p class="label">Sana</p>
      <BaseInput type="date" />
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
  </ModalWrapper>
</template>

<script setup>
import { ref } from 'vue'
import BaseSelect from '@/components/base/Select.vue'
import BaseInput from '@/components/base/Input.vue'
import FilterTabs from '@/components/common/FilterTabs.vue'
import ModalWrapper from '@/components/Modal/ModalWrapper.vue'
import BaseButton from '@/components/base/Button.vue'

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
