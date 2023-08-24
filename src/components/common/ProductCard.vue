<template>
  <router-link :to="`/collection/${id}`">
    <div :class="customClass" class="m-auto hover:cursor-pointer">
      <img v-lazy="img" alt="featured" class="mb-4 w-[460px] h-[364px] object-fit" />
      <div class="mt-4 flex items-center justify-between">
        <h5 class="w-1/2 font-semibold text-primary line-clamp-1">{{ title }}</h5>
        <div
          class="w-1/2 rounded-full border border-black bg-white px-4 py-1 transition-all hover:cursor-pointer hover:bg-black hover:text-white"
        >
          <p class="font-semibold text-center  px-4">Learn More</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: String,
    img: String,
    title: String,
    price: String,
    customClass: String,
  },
};
</script>
