<template>
  <div :class="customClass">
    <img :src="img" alt="featured" class="w-full mb-4" />
    <h2>{{ title }}</h2>
    <div class="flex justify-between items-center mt-2">
      <p class="text-primary font-semibold">${{ price }}</p>
      <div class="bg-white border py-1 px-4 border-black rounded-full">
        <p class="font-light text-sm">Learn More</p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props:{
    img: String,
    title: String,
    price: String,
    customClass: String,
  }
}
</script>