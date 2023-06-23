<template>
  <div class="text-center">
    <div class="flex items-center justify-center space-x-3">
      <img :src="img" alt="customer" />
      <div>
        <p class="font-semibold">{{ peopleName }}</p>
        <p class="text-gray-500 font-light">{{ peopleJob }}</p>
      </div>
    </div>
    <p class="mt-8">
      {{ peopleTestimony }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    peopleName: String,
    peopleJob: String,
    peopleTestimony: String,
  },
};
</script>
