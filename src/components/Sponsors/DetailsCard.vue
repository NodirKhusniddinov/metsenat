<template>
  <div class="mt-10 bg-white rounded-xl pt-6 pb-8 px-8 mx-auto max-w-[793px]">
    <div class="flex justify-between items-center">
      <h3 class="font-sf-bold text-2xl text-[#28293D]">Homiy haqida</h3>
      <BaseButton size="filter" color="purple" class="flex gap-2.5">
        <img src="../../assets/icons/edit_icon.svg" alt="edit icon" />
        Tahrirlash
      </BaseButton>
    </div>
    <div class="flex items-center gap-5 mt-8">
      <div
        class="bg-[#EAECF0] border border-[#E0E7FF] py-4 px-[18px] rounded-md"
      >
        <img src="@/assets/svg/profile.svg" alt="profile image" />
      </div>
      <p class="font-rubik-medium text-[16px] text-[#212121] max-w-40">
        Ishmuhammedov Aziz Ishqobilovich
      </p>
    </div>
    <div class="flex mt-6 items-center gap-x-56">
      <div class="flex flex-col gap-3">
        <p
          class="font-rubik tracking-[1.13px] text-xs text-[#B1B1B8] uppercase"
        >
          telefon raqam
        </p>
        <p class="font-rubik-medium text-[16px] text-[#212121]">
          +998 99 973-72-60
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <p
          class="font-rubik tracking-[1.13px] text-xs text-[#B1B1B8] uppercase"
        >
          Homiylik summasi
        </p>
        <p class="font-rubik-medium text-[16px] text-[#212121]">
          {{ formatNumber(30000000) }} UZS
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-3 mt-6">
      <p class="font-rubik tracking-[1.13px] text-xs text-[#B1B1B8] uppercase">
        Tashkilot nomi
      </p>
      <p class="font-rubik-medium text-[16px] text-[#212121]">
        Orient Group Corporation
      </p>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/Button.vue'
const formatNumber = value => {
  return value.toLocaleString('en-US').replace(/,/g, ' ')
}
</script>
