<template>
  <div>
    <DetailsToolbar :name="name" :verified="isVerified" />

    <SponsorsDetailsCard />
    <BgDetails />
  </div>
</template>

<script setup>
import DetailsToolbar from '@/components/ToolBar/DetailsToolbar.vue'
import SponsorsDetailsCard from '@/components/Sponsors/DetailsCard.vue'
import BgDetails from '@/components/common/BgDetails.vue'
const name = 'Isfandiyorov  Iqbol Bobomirzayevich'
const isVerified = true
</script>
