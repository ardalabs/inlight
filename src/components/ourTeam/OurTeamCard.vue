<template>
  <div class="mb-16 mt-4 px-10 sm:px-16 md:px-28 xl:mb-0 xl:px-0">
    <img :src="img" alt="team" class="w-full object-cover" />
    <h4 class="mt-4 font-semibold">{{ peopleName }}</h4>
    <h5 class="text-gray-500">{{ peoplePosition }}</h5>
    <div class="mt-4 flex justify-end xl:mt-10">
      <button
        class="flex items-center justify-between rounded-full border border-black px-3 py-2 transition-all hover:cursor-pointer hover:bg-black hover:text-white"
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
