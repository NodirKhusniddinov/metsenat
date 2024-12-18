<template>
  <table class="w-full border-spacing-y-3 border-separate">
    <thead>
      <tr
        class="font-rubik tracking-[1.13px] text-xs text-center text-[#B1B1B8] uppercase"
      >
        <th>#</th>
        <th>F.I.SH.</th>
        <th>Tel.Raqami</th>
        <th>Homiylik summasi</th>
        <th>Sarflangan summa</th>
        <th>Sana</th>
        <th>Holati</th>
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
        <td class="bg-white py-6 font-rubik-medium">
          {{ formatNumber(d.sum) }} <span class="text-[#B2B7C1]">UZS</span>
        </td>
        <td class="bg-white py-6 font-rubik-medium">
          {{ formatNumber(d.spent) }} <span class="text-[#B2B7C1]">UZS</span>
        </td>
        <td class="bg-white py-6">
          {{ formatDate(d.created_at) }}
        </td>
        <td
          class="bg-white py-6 text-[15px]"
          :class="getStatusStyles(d.get_status_display)"
        >
          {{ d.get_status_display }}
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
const formatDate = dateString => {
  return new Date(dateString)
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .replace(/\//g, '.')
}

const getStatusStyles = status => {
  const styles = {
    Yangi: 'text-[#5BABF2]',
    Moderatsiyada: 'text-[#FFA445]',
    Tasdiqlangan: 'text-[#00CF83]',
    'Bekor qilingan': 'text-[#979797]',
  }
  return styles[status]
}

const router = useRouter()

const navigate = sponsorId => {
  router.push({ name: 'SponsorDetails', params: { sponsorId } })
}
</script>
