<template>
  <main class="py-12 mx-auto container">
    <div
      class="gap-7 justify-between sm:grid sm:grid-cols-1 max-sm:grid max-sm:grid-cols-1 md:flex md:justify-between w-full"
    >
      <UiCard>
        <DashboardCardInfo
          text="Jami to‘langan summa"
          price="1 684 325 000"
          color="#4C6FFF"
        />
      </UiCard>

      <UiCard>
        <DashboardCardInfo
          text="Jami so‘ralgan summa"
          price="14 098 530 000"
          color="#EDC700"
        />
      </UiCard>

      <UiCard>
        <DashboardCardInfo
          text="To‘lanishi kerak summa"
          price="12 414 205 000"
          color="#ED7200"
        />
      </UiCard>
    </div>
    <LineGraph />
  </main>
</template>

<script setup>
import UiCard from '@/components/UI/UiCard.vue'
import DashboardCardInfo from '@/components/Dashboard/CardInfo.vue'
import LineGraph from '@/components/Dashboard/LineGraph.vue'
</script>
