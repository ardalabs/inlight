<template>
  <div class="mt-4 mb-20 px-10">
    <img :src="img" alt="team" />
    <h4 class="font-semibold mt-4">{{ peopleName }}</h4>
    <h5 class="text-gray-500">{{ peoplePosition }}</h5>
    <div class="flex justify-end mt-4">
      <button
        class="border flex justify-between items-center border-black rounded-full px-4 py-1"
      >
        <p class="w-5/6">Read More</p>
        <div class="w-1/6">
          <img src="/common/ic-arrow-down.svg" alt="arrow down" />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    peopleName: String,
    peoplePosition: String,
  },
};
</script>
