<template>
  <div class="w-full bg-[#fbfbfb]">
    <div class="container py-[30px] px-2 mx-auto flex items-center gap-4">
      <img
        src="@/assets/icons/arrow-left.svg"
        alt="arrow icon"
        class="cursor-pointer"
        @click="goBack"
      />
      <h1 class="font-sf-bold text-2xl text-[#28293D]">
        Ishmuhammedov Aziz Ishqobilovich
      </h1>
      <div
        class="bg-[#DDFFF2] py-1.5 px-3 rounded-[5px] text-[#00CF83] font-rubik text-xs"
      >
        Tasdiqlangan
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  router.go(-1)
}
</script>
