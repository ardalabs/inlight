<template>
  <!-- footer section -->
  <div>
    <div
      class="mt-24 max-w-sm m-auto bg-footer h-[50vh] flex flex-col justify-end items-center"
    >
      <div class="mb-20">
        <h2 class="text-white text-center font-medium">Choose Your Best One</h2>
        <commonButton text="Shop Now" customClass="w-40 m-auto mt-4" />
      </div>
    </div>

    <img src="/light-inlight.png" alt="logo inlight" class="m-auto mt-8 mb-6" />
    <div class="max-w-sm px-8 mt-4">
      <div class="grid grid-cols-2">
        <p class="font-semibold">Stockists</p>
        <p class="font-semibold">News and Journal</p>
      </div>
      <div class="grid grid-cols-2 mt-4">
        <p class="font-semibold">Trade</p>
        <p class="font-semibold">FAQs</p>
      </div>
      <div class="my-10 flex justify-start gap-x-8 items-center">
        <img src="/common/ic-instagram.svg" alt="instagram-logo" />
        <img src="/common/ic-twitter.svg" alt="instagram-twitter" />
        <img src="/common/ic-facebook.svg" alt="instagram-facebook" />
      </div>
      <div class="grid grid-cols-2 mb-8">
        <p class="text-gray-700 font-light">info@inlight.io</p>
        <p class="text-gray-700 font-light">(+62) 867 2632 1271</p>
      </div>
    </div>
    <div class="bg-primary">
      <div class="flex justify-between px-4 py-6 items-center">
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
