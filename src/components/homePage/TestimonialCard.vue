<template>
  <div class="text-center block w-full">
    <div class="flex items-center justify-center space-x-3">
      <img :src="img" alt="customer" />
      <div>
        <h4 class="font-semibold">{{ peopleName }}</h4>
        <h4 class="text-gray-500 font-light">{{ peopleJob }}</h4>
      </div>
    </div>
    <h5 class="mt-8">
      {{ peopleTestimony }}
    </h5>
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
