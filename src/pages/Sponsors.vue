<template>
  <div
    class="container mt-[28px] px-2 mx-auto flex items-center justify-between"
  >
    <SponsorsTable class="w-full" :list="sponsorList.results" />
  </div>
</template>

<script setup>
import SponsorsTable from '@/components/Tables/SponsorsTable.vue'
const sponsorList = {
  count: 863,
  next: 'http://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/?format=api&ordering=id&page=2',
  previous: null,
  results: [
    {
      id: 9,
      full_name: 'Alisher Tojiev',
      phone: '+998 (90) 000 33 06',
      sum: 5000000,
      payment_type: [],
      firm: null,
      spent: -3980999,
      created_at: '2021-10-14T21:23:59.079005+05:00',
      get_status_display: 'Moderatsiyada',
    },
    {
      id: 59,
      full_name: 'men kimman',
      phone: '+998 (00) 000 00 00',
      sum: 100,
      payment_type: [
        {
          id: 45,
          title: 'Plastik karta',
        },
      ],
      firm: '',
      spent: 0,
      created_at: '2021-10-25T10:44:14.344958+05:00',
      get_status_display: 'Moderatsiyada',
    },
    {
      id: 60,
      full_name: 'asd',
      phone: '+998 (AD) ADA DA DA',
      sum: 50000000,
      payment_type: [
        {
          id: 45,
          title: 'Plastik karta',
        },
      ],
      firm: '',
      spent: 0,
      created_at: '2021-11-22T11:10:23.093065+05:00',
      get_status_display: 'Moderatsiyada',
    },
    {
      id: 61,
      full_name: 'asdasd',
      phone: '+998 (12) 323 42 34',
      sum: 500000,
      payment_type: [
        {
          id: 44,
          title: 'Naqd pul',
        },
      ],
      firm: '',
      spent: 0,
      created_at: '2021-11-22T16:06:38.135545+05:00',
      get_status_display: 'Yangi',
    },
    {
      id: 62,
      full_name: 'Matrasulova Shahlo Muxammadjon qizi',
      phone: '+998(99)-960-95-12',
      sum: 7500000,
      payment_type: [
        {
          id: 45,
          title: 'Plastik karta',
        },
      ],
      firm: '',
      spent: 0,
      created_at: '2021-11-22T21:20:15.566225+05:00',
      get_status_display: 'Moderatsiyada',
    },
    {
      id: 63,
      full_name: "Turobov Bekpo'lat Nusratullayevich",
      phone: '+998 (97) 920 34 35',
      sum: 500000,
      payment_type: [
        {
          id: 45,
          title: 'Plastik karta',
        },
      ],
      firm: '',
      spent: 0,
      created_at: '2021-11-22T21:25:39.786864+05:00',
      get_status_display: 'Moderatsiyada',
    },
    {
      id: 64,
      full_name: 'Jumaqov Asadbek Bahodirovich',
      phone: '+998 (99) 620 63 11',
      sum: 26000000,
      payment_type: [
        {
          id: 45,
          title: 'Plastik karta',
        },
      ],
      firm: '',
      spent: 0,
      created_at: '2021-11-22T21:26:09.919892+05:00',
      get_status_display: 'Moderatsiyada',
    },
    {
      id: 65,
      full_name: 'Jumaqov a Mehribonu Bahodirovna',
      phone: '+998 (90) 043 12 11',
      sum: 7500000,
      payment_type: [
        {
          id: 45,
          title: 'Plastik karta',
        },
      ],
      firm: '',
      spent: 0,
      created_at: '2021-11-22T21:27:26.326272+05:00',
      get_status_display: 'Moderatsiyada',
    },
    {
      id: 66,
      full_name: 'Qoziboyeb Obidjon Nematillo ogli',
      phone: '+998 (99) 748 48 10',
      sum: 1000000,
      payment_type: [
        {
          id: 45,
          title: 'Plastik karta',
        },
      ],
      firm: '',
      spent: 0,
      created_at: '2021-11-22T22:02:36.719502+05:00',
      get_status_display: 'Moderatsiyada',
    },
    {
      id: 67,
      full_name: 'Matmurotov Bobomurot Begnazarovich',
      phone: '+998 (97) 510 00 02',
      sum: 500000,
      payment_type: [
        {
          id: 45,
          title: 'Plastik karta',
        },
      ],
      firm: '',
      spent: 15000,
      created_at: '2021-11-22T22:25:09.946489+05:00',
      get_status_display: 'Moderatsiyada',
    },
  ],
}
</script>
