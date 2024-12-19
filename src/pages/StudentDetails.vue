<template>
  <div>
    <DetailsToolbar :name="student.full_name" />
    <StudentsDetailsCard />
    <SponsorsToStudentsCard :sponsors="student.sponsors" />
    <BgDetails />
  </div>
</template>

<script setup>
import DetailsToolbar from '@/components/ToolBar/DetailsToolbar.vue'
import StudentsDetailsCard from '@/components/Students/DetailsCard.vue'
import BgDetails from '@/components/common/BgDetails.vue'
import SponsorsToStudentsCard from '@/components/Students/SponsorsToStudentsCard.vue'
const student = {
  id: 100,
  full_name: 'Ashurov Farxod',
  given: 135430306,
  get_status_display: 'Tasdiqlangan',
  sponsors: [
    {
      id: 112,
      sponsor: {
        id: 9,
        full_name: 'Alisher Tojiev',
      },
      summa: 2000,
    },
    {
      id: 116,
      sponsor: {
        id: 74,
        full_name: 'Mavlonov Sherzod Isroilovich',
      },
      summa: 100000,
    },
    {
      id: 117,
      sponsor: {
        id: 9,
        full_name: 'Alisher Tojiev',
      },
      summa: 2000,
    },
    {
      id: 626,
      sponsor: {
        id: 623,
        full_name: 'Sultonkhon Oblokulov',
      },
      summa: 135153,
    },
  ],
}
</script>
