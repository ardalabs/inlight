<template>
  <div :class="customClass" class="m-auto">
    <img :src="img" alt="featured" class="mb-4 w-full" />
    <h4>{{ title }}</h4>
    <div class="mt-2 flex items-center justify-between">
      <h5 class="font-semibold text-primary">${{ price }}</h5>
      <div
        class="rounded-full border border-black bg-white px-4 py-1 transition-all hover:cursor-pointer hover:bg-black hover:text-white"
      >
        <p class="font-light">Learn More</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    price: String,
    customClass: String,
  },
};
</script>
