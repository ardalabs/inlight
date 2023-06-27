<template>
  <div :class="customClass" class="m-auto">
    <img :src="img" alt="featured" class="w-full mb-4" />
    <h4>{{ title }}</h4>
    <div class="flex justify-between items-center mt-2">
      <h5 class="text-primary font-semibold">${{ price }}</h5>
      <div class="bg-white border py-1 px-4 border-black rounded-full hover:bg-black hover:text-white hover:cursor-pointer transition-all">
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
