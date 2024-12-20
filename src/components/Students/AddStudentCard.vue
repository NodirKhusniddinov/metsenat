<template>
  <div class="mt-10 bg-white rounded-xl py-6 px-8 mx-auto max-w-[793px]">
    <div class="border-b-2 border-[#F5F5F7] pb-7">
      <div class="grid grid-cols-2 gap-7 items-center">
        <div>
          <p class="label">F.I.Sh. (Familiya Ism Sharif)</p>
          <BaseInput placeholder="Abdullayev Abdulla Abdulla o’g’li" />
        </div>
        <div>
          <p class="label">Telefon raqam</p>
          <BaseInput type="tel" modelValue="+998" />
        </div>
      </div>
      <p class="label">Otm</p>
      <BaseSelect v-model="selected" :options="options" />

      <div class="grid grid-cols-2 gap-7 items-center">
        <div>
          <p class="label">Talabalik turi</p>
          <BaseSelect v-model="selected" :options="options" />
        </div>
        <div>
          <p class="label">Kontrakt summa</p>
          <BaseInput type="number" />
        </div>
      </div>
    </div>

    <div class="flex items-center justify-end gap-4 mt-7">
      <BaseButton class="flex gap-2.5" size="xl">
        <img src="../../assets/icons/add_icon_white.svg" alt="add icon" />
        Qo'shish
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import BaseSelect from '@/components/base/Select.vue'
import BaseButton from '@/components/base/Button.vue'
import BaseInput from '@/components/base/Input.vue'
import { ref } from 'vue'

const selected = ref(null)
const options = ref([
  { label: 'Barchasi', value: 'option1' },
  { label: 'Yangi', value: 'option2' },
  { label: 'Moderatsiyada', value: 'option3' },
  { label: 'Tasdiqlangan', value: 'option4' },
  { label: 'Bekor qilingan', value: 'option5' },
])
</script>
