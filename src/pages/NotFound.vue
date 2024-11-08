<template>
  <div
    class="bg-[#f4fbff] flex flex-col justify-center items-center min-h-screen gap-14"
  >
    <img src="@/assets/images/error.png" alt="404" />
    <p class="text-xl font-sf">
      <RouterLink :to="{ name: 'Home' }" class="text-blue-600"
        >Asosoiy sahifaga </RouterLink
      >qaytish
    </p>
  </div>
</template>
<script setup lang="ts"></script>
