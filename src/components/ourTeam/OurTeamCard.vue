<template>
  <div class="mt-4 mb-16 xl:mb-0 px-10 sm:px-16 md:px-28 xl:px-0">
    <img :src="img" alt="team" class="object-cover w-full" />
    <h4 class="font-semibold mt-4">{{ peopleName }}</h4>
    <h5 class="text-gray-500">{{ peoplePosition }}</h5>
    <div class="flex justify-end mt-4 xl:mt-10">
      <button
        class="border flex justify-between items-center border-black rounded-full px-3 py-2 hover:cursor-pointer hover:bg-black hover:text-white transition-all"
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
