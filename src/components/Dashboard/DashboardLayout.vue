<template>
  <div
    class="gap-7 justify-between sm:grid sm:grid-cols-1 max-sm:grid max-sm:grid-cols-1 md:flex md:justify-between w-full"
  >
    <div class="card_wrapper py-6 px-6" v-for="card in cards" :key="card">
      <DashboardCardInfo
        :text="card.text"
        :price="card.price"
        :color="card.color"
      />
    </div>
  </div>
  <LineGraph />
</template>

<script setup>
import DashboardCardInfo from '@/components/Dashboard/CardInfo.vue'
import LineGraph from '@/components/Dashboard/LineGraph.vue'

const cards = [
  { text: 'Jami to‘langan summa', price: '1 684 325 000', color: '#4C6FFF' },
  { text: 'Jami so‘ralgan summa', price: '14 098 530 000', color: '#EDC700' },
  { text: 'To‘lanishi kerak summa', price: '12 414 205 000', color: '#ED7200' },
]
</script>
