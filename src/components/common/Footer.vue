<script setup>
import commonButton from "../common/commonButton.vue";
</script>
<template>
  <div class="m-auto">
    <div
      class="mt-24 2xl:mt-32 max-w-sm sm:max-w-[540px] md:max-w-[668px] xl:max-w-[1000px] 2xl:max-w-[1200px] m-auto bg-footer h-[50vh] flex flex-col justify-end items-center"
    >
      <div class="mb-20">
        <h2 class="text-white text-center font-medium">Choose Your Best One</h2>
        <commonButton text="Shop Now" customClass="w-40 m-auto mt-4" />
      </div>
    </div>

    <img src="/light-inlight.png" alt="logo inlight" class="m-auto mt-8 mb-6" />
    <div
      class="max-w-sm sm:max-w-[540px] md:max-w-[668px] xl:max-w-[1000px] 2xl:max-w-[1200px] m-auto"
    >
      <div class="px-8 xl:px-0 mt-4 xl:grid xl:grid-cols-3 xl:mb-16">
        <div class="xl:flex xl:flex-col xl:justify-end">
          <div class="grid grid-cols-2">
            <p class="font-semibold">Stockists</p>
            <p class="font-semibold text-end xl:text-start">News and Journal</p>
          </div>
          <div class="grid grid-cols-2 mt-4">
            <p class="font-semibold">Trade</p>
            <p class="font-semibold text-end xl:text-start">FAQs</p>
          </div>
        </div>
        <div
          class="my-16 xl:my-0 flex justify-start gap-x-8 items-center xl:justify-center xl:items-end"
        >
          <img src="/common/ic-instagram.svg" alt="instagram-logo" />
          <img src="/common/ic-twitter.svg" alt="instagram-twitter" />
          <img src="/common/ic-facebook.svg" alt="instagram-facebook" />
        </div>
        <div class="flex justify-between mb-8 xl:mb-0 xl:items-end">
          <p class="text-gray-700 font-light">info@inlight.io</p>
          <p class="text-gray-700 font-light">(+62) 867 2632 1271</p>
        </div>
      </div>
    </div>
    <div class="bg-primary">
      <div
        class="flex justify-between px-4 py-6 lg:px-10 xl:px-32 items-center"
      >
        <p class="text-sm text-white">Copyright ©inlight {{ currentYear }}</p>
        <div class="flex justify-start gap-x-3">
          <p class="text-sm text-white">Privacy Policy</p>
          <p class="text-sm text-white">Terms of Service</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
