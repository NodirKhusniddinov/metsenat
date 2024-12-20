<template>
  <ModalWrapper>
    <!--      max-h-[585px] overflow-y-auto-->
    <div class="border-y-2 border-[#F5F5F7] pb-7">
      <ModalTab :tabs="tabs" v-model="activeTab" class="mt-7 cursor-pointer" />
      <p class="label">F.I.Sh. (Familiya Ism Sharifingiz)</p>
      <BaseInput modelValue="Ishmuhammedov Aziz Ishqobilovich" />
      <p class="label">Telefon raqam</p>
      <BaseInput type="tel" modelValue="+998" />

      <p class="label">Holati</p>
      <BaseSelect v-model="selected" :options="options" />
      <p class="label">Homiylik summasi</p>
      <BaseSelect v-model="selected" :options="options" />
      <p class="label">To‘lov turi</p>
      <BaseSelect v-model="selected" :options="options" />
      <div v-show="activeTab === 'two'">
        <p class="label">Tashkilot nomi</p>
        <BaseInput modelValue="Orient Group" />
      </div>
    </div>

    <div class="flex items-center justify-end gap-4 mt-7">
      <BaseButton class="flex gap-2.5">
        <img src="../../assets/icons/save_icon.svg" alt="save icon" />
        Saqlash
      </BaseButton>
    </div>
  </ModalWrapper>
</template>

<script setup>
import { ref } from 'vue'
import BaseSelect from '@/components/base/Select.vue'
import BaseInput from '@/components/base/Input.vue'
import ModalWrapper from '@/components/Modal/ModalWrapper.vue'
import BaseButton from '@/components/base/Button.vue'
import ModalTab from '@/components/common/ModalTab.vue'

const tabs = [
  { name: 'one', label: 'Jismoniy shaxs' },
  { name: 'two', label: 'Yuridik shaxs' },
]

const activeTab = ref('one')

const selected = ref(null)
const options = ref([
  { label: 'Barchasi', value: 'option1' },
  { label: 'Yangi', value: 'option2' },
  { label: 'Moderatsiyada', value: 'option3' },
  { label: 'Tasdiqlangan', value: 'option4' },
  { label: 'Bekor qilingan', value: 'option5' },
])
</script>
