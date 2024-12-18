<template>
  <table class="w-full border-spacing-y-3 border-separate">
    <thead>
      <tr
        class="font-rubik tracking-[1.13px] text-xs text-center text-[#B1B1B8] uppercase"
      >
        <th>#</th>
        <th>f.i.sh.</th>
        <th>Tel.Raqami</th>
        <th>otm</th>
        <th>Ajratilingan summa</th>
        <th>Kontrakt miqdori</th>
        <th>Amallar</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border border-[#F5F5F7] text-center font-rubik text-[#1D1D1F] text-[14px] cursor-pointer"
        v-for="(d, index) of list"
        :key="index"
        @click="navigate(d.id)"
      >
        <td class="bg-white rounded-l-lg px-4 py-6 text-[15px]">
          {{ index + 1 }}
        </td>
        <td class="bg-white py-6 font-rubik-medium text-[15px]">
          {{ d.full_name }}
        </td>
        <td class="bg-white py-6">{{ d.phone }}</td>
        <td class="bg-white py-6">{{ d.institute?.name }}</td>
        <td class="bg-white py-6 font-rubik-medium">
          {{ formatNumber(d.given) }} <span class="text-[#B2B7C1]">UZS</span>
        </td>
        <td class="bg-white py-6 font-rubik-medium">
          {{ formatNumber(d.contract) }} <span class="text-[#B2B7C1]">UZS</span>
        </td>
        <td
          class="bg-white rounded-r-lg px-4 py-6 flex items-center justify-center"
        >
          <img src="@/assets/svg/eye.svg" alt="eye" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  list: {
    type: Array,
    required: false,
  },
})
const formatNumber = value => {
  return value.toLocaleString('en-US').replace(/,/g, ' ')
}
const router = useRouter()

const navigate = studentId => {
  router.push({ name: 'StudentDetails', params: { studentId } })
}
</script>
