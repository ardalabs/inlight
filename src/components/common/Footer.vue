<script setup>
import commonButton from "../common/commonButton.vue";
</script>
<template>
  <div class="m-auto">
    <div
      class="m-auto mt-24 flex h-[50vh] max-w-sm flex-col items-center justify-end bg-footer sm:max-w-[540px] md:max-w-[668px] lg:max-w-[950px] xl:max-w-[1200px] 2xl:mt-32 2xl:max-w-[1400px]"
    >
      <div class="mb-20">
        <h2 class="text-center font-medium text-white">Choose Your Best One</h2>
        <commonButton text="Shop Now" customClass="w-44 m-auto mt-4" />
      </div>
    </div>

    <img src="/light-inlight.png" alt="logo inlight" class="m-auto mb-6 mt-8" />
    <div
      class="m-auto max-w-sm sm:max-w-[540px] md:max-w-[668px] lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1400px]"
    >
      <div class="mt-4 xl:mb-16 xl:grid xl:grid-cols-3">
        <div class="xl:flex xl:flex-col xl:justify-end">
          <div class="grid grid-cols-2">
            <p class="font-semibold">Stockists</p>
            <p class="text-end font-semibold xl:text-start">News and Journal</p>
          </div>
          <div class="mt-4 grid grid-cols-2">
            <p class="font-semibold">Trade</p>
            <p class="text-end font-semibold xl:text-start">FAQs</p>
          </div>
        </div>
        <div
          class="my-16 flex items-center justify-start gap-x-8 xl:my-0 xl:items-end xl:justify-center"
        >
          <img src="/common/ic-instagram.svg" alt="instagram-logo" />
          <img src="/common/ic-twitter.svg" alt="instagram-twitter" />
          <img src="/common/ic-facebook.svg" alt="instagram-facebook" />
        </div>
        <div class="mb-8 flex justify-between xl:mb-0 xl:items-end">
          <p class="font-light text-gray-700">info@inlight.io</p>
          <p class="font-light text-gray-700">(+62) 867 2632 1271</p>
        </div>
      </div>
    </div>
    <div class="bg-primary">
      <div
        class="flex items-center justify-between px-4 py-6 lg:px-10 xl:px-32"
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
