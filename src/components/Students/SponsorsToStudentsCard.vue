<template>
  <div class="mt-10 bg-white rounded-xl py-6 px-8 mx-auto max-w-[793px]">
    <div class="flex justify-between items-center">
      <h3 class="font-sf-bold text-2xl text-[#28293D]">Talabaga homiylar</h3>

      <BaseButton size="filter" color="purple" class="flex gap-2.5">
        <img src="../../assets/icons/add_icon.svg" alt="add icon" />
        Homiy qo‘shish
      </BaseButton>
    </div>
    <table class="w-full border-spacing-y-3 border-separate mt-[26px]">
      <thead>
        <tr
          class="font-rubik tracking-[1.13px] text-xs text-center text-[#B1B1B8] uppercase"
        >
          <th>#</th>
          <th>f.i.sh.</th>
          <th>Ajratilingan summa</th>
          <th>Amallar</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="text-center font-rubik text-[#1D1D1F] text-[14px]"
          v-for="(d, index) of sponsors"
          :key="index"
        >
          <td class="bg-[#FBFBFC] rounded-l-lg px-4 py-6 text-[15px]">
            {{ index + 1 }}
          </td>
          <td class="bg-[#FBFBFC] py-6 font-rubik-medium text-[15px]">
            {{ d.sponsor.full_name }}
          </td>
          <td class="bg-[#FBFBFC] py-6 font-rubik-medium">
            {{ formatNumber(d.summa) }} <span class="text-[#B2B7C1]">UZS</span>
          </td>
          <td
            class="bg-[#FBFBFC] rounded-r-lg px-4 py-6 flex items-center justify-center"
          >
            <img
              src="@/assets/icons/edit_icon.svg"
              alt="edit icon"
              class="cursor-pointer"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/Button.vue'
const props = defineProps({
  sponsors: {
    type: Array,
    required: false,
  },
})
const formatNumber = value => {
  return value.toLocaleString('en-US').replace(/,/g, ' ')
}
</script>
