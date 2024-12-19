<template>
  <div>
    <DetailsToolbar />
    <StudentsDetailsCard />
    <SponsorsToStudentsCard />
    <BgDetails />
  </div>
</template>

<script setup>
import DetailsToolbar from '@/components/ToolBar/DetailsToolbar.vue'
import StudentsDetailsCard from '@/components/Students/DetailsCard.vue'
import BgDetails from '@/components/common/BgDetails.vue'
import SponsorsToStudentsCard from '@/components/Students/SponsorsToStudentsCard.vue'
</script>
