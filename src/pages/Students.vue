<template>
  <div class="container px-2 mx-auto flex flex-col items-center">
    <div class="w-full flex justify-end my-[28px]">
      <BaseButton size="filter" class="flex gap-2.5" @click="navigateToAdd">
        <img src="@/assets/icons/add_icon_white.svg" alt="add icon" />
        Talaba qo‘shish
      </BaseButton>
    </div>
    <StudentsTable class="w-full" :list="studentList.results" />
  </div>
</template>

<script setup>
import StudentsTable from '@/components/Tables/StudentsTable.vue'
import BaseButton from '@/components/base/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToAdd = () => {
  router.push({ name: 'AddStudent' })
}
const studentList = {
  count: 184,
  next: 'http://metsenatclub.xn--h28h.uz/api/v1/student-list/?page=2',
  previous: null,
  results: [
    {
      id: 1845,
      full_name: 'Salom',
      type: 1,
      phone: '+998914899186',
      institute: {
        id: 342,
        name: 'Farg‘ona davlat universiteti',
      },
      contract: 12,
      given: 0,
      get_status_display: 'Yangi',
    },
    {
      id: 1840,
      full_name: 'Ahmadjon',
      type: 1,
      phone: '95 342-32-43',
      institute: {
        id: 10,
        name: 'Toshkent Axborot Texnologiyalari Universiteti',
      },
      contract: 343432,
      given: 0,
      get_status_display: 'Yangi',
    },
    {
      id: 1836,
      full_name: 'Abdullayev Sanjar',
      type: 2,
      phone: '+99899 235 25 25',
      institute: {
        id: 335,
        name: 'Toshkent kimyo-texnologiya instituti Shahrisabz filiali',
      },
      contract: 12123232,
      given: 0,
      get_status_display: 'Yangi',
    },
    {
      id: 1835,
      full_name: 'Samardar Xalilov',
      type: 1,
      phone: '+998222356545',
      institute: {
        id: 369,
        name: 'Toshkent Farmatsevtika Instituti',
      },
      contract: 2000000,
      given: 0,
      get_status_display: 'Yangi',
    },
    {
      id: 1833,
      full_name: 'Muhammaddiyor Odiljonov',
      type: 1,
      phone: '+99855 231 15 43',
      institute: {
        id: 369,
        name: 'Toshkent Farmatsevtika Instituti',
      },
      contract: 50000003,
      given: 0,
      get_status_display: 'Yangi',
    },
    {
      id: 1832,
      full_name: "Abdullayev Abdulla Abdulla o'g'li",
      type: 1,
      phone: '+99891 200 45 55',
      institute: {
        id: 335,
        name: 'Toshkent kimyo-texnologiya instituti Shahrisabz filiali',
      },
      contract: 120032,
      given: 0,
      get_status_display: 'Yangi',
    },
    {
      id: 1831,
      full_name: 'Abdulloh Qobulov',
      type: 2,
      phone: '+99895 220 23 26',
      institute: {
        id: 403,
        name: 'Geologiya fanlari universiteti',
      },
      contract: 45000000,
      given: 0,
      get_status_display: 'Yangi',
    },
    {
      id: 1830,
      full_name: 'Omonboyev Ahadjon',
      type: 3,
      phone: '+99899 999 99 99',
      institute: {
        id: 373,
        name: 'Toshkent davlat agrar universiteti',
      },
      contract: 15000000,
      given: 0,
      get_status_display: 'Yangi',
    },
    {
      id: 1829,
      full_name: 'Sotvoldiyev Jasur',
      type: 1,
      phone: '+99891 489 91 86',
      institute: {
        id: 336,
        name: 'Toshkent moliya instituti',
      },
      contract: 12121212,
      given: 0,
      get_status_display: 'Yangi',
    },
    {
      id: 1828,
      full_name: 'Abdullayev Abdulaziz',
      type: 2,
      phone: '+99887 88 88 88',
      institute: {
        id: 336,
        name: 'Toshkent moliya instituti',
      },
      contract: 12000000,
      given: 0,
      get_status_display: 'Yangi',
    },
  ],
}
</script>
