<template>
  <ModalWrapper>
    <div class="border-y-2 border-[#F5F5F7] pb-7">
      <p class="label">Talabalik turi</p>
      <BaseSelect v-model="selected" :options="options" />
      <p class="label">OTM</p>
      <BaseSelect v-model="selected" :options="transformedList" />
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
import { onMounted, ref, watch } from 'vue'
import BaseSelect from '@/components/base/Select.vue'
import ModalWrapper from '@/components/Modal/ModalWrapper.vue'
import BaseButton from '@/components/base/Button.vue'
import { useInstituteList } from '@/composables/useInstituteList.js'

const options = ref([
  { label: 'Barchasi', value: 'option1' },
  { label: 'Yangi', value: 'option2' },
  { label: 'Moderatsiyada', value: 'option3' },
  { label: 'Tasdiqlangan', value: 'option4' },
  { label: 'Bekor qilingan', value: 'option5' },
  { label: 'Bekor qilingan', value: 'option5' },
  { label: 'Bekor qilingan', value: 'option5' },
])
const { list, fetchInstituteList } = useInstituteList()
const selected = ref(null)

const transformedList = ref([])

const transformList = data => {
  if (!data || !Array.isArray(data)) {
    return []
  }
  return data.map(item => ({
    value: item.id,
    label: item.name,
  }))
}

watch(list, newList => {
  if (newList && newList.length > 0) {
    transformedList.value = transformList(newList)
  } else {
    transformedList.value = []
  }
})

onMounted(() => {
  fetchInstituteList().catch(error => {
    console.error('Error fetching institute list:', error)
  })
})
</script>
