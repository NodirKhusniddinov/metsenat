<template>
  <div
    class="gap-7 justify-between sm:grid sm:grid-cols-1 max-sm:grid max-sm:grid-cols-1 md:flex md:justify-between w-full"
  >
    <div class="card_wrapper py-6 px-6" v-for="card in cards" :key="card.text">
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
import { computed, onMounted } from 'vue'
import { useDashboardData } from '@/composables/useDashboardData'

const { prices, fetchDashboardData } = useDashboardData()

const formatNumber = value => value.toLocaleString('en-US').replace(/,/g, ' ')

const cards = computed(() => [
  {
    text: 'Jami to‘langan summa',
    price: formatNumber(prices.total_paid),
    color: '#4C6FFF',
  },
  {
    text: 'Jami so‘ralgan summa',
    price: formatNumber(prices.total_need),
    color: '#EDC700',
  },
  {
    text: 'To‘lanishi kerak summa',
    price: formatNumber(prices.total_must_pay),
    color: '#ED7200',
  },
])

onMounted(fetchDashboardData)
</script>
