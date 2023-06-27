<template>
  <div class="block w-full text-center">
    <div class="flex items-center justify-center space-x-3">
      <img :src="img" alt="customer" />
      <div>
        <h4 class="font-semibold">{{ peopleName }}</h4>
        <h4 class="font-light text-gray-500">{{ peopleJob }}</h4>
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
