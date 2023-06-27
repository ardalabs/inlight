<template>
  <div class="mt-8">
    <h3>{{ title }}</h3>
    <div class="xl:grid xl:grid-cols-3 xl:gap-x-10 ">
      <div class="xl:col-span-2">
        <p class="mt-2 text-gray-500 text-justify">
          {{ description }}
        </p>
      </div>
      <div class="xl:col-span-1">
        <div class="mt-6 grid grid-cols-2 gap-4 xl:mt-2">
          <div>
            <p>Interior Designer</p>
            <p class="text-gray-500">{{ interior }}</p>
          </div>
          <div>
            <p>Architecture</p>
            <p class="text-gray-500">{{ architecture }}</p>
          </div>
          <div>
            <p>Builder</p>
            <p class="text-gray-500">{{ builder }}</p>
          </div>
          <div>
            <p>Photography</p>
            <p class="text-gray-500">{{ photography }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    interior: String,
    architecture: String,
    builder: String,
    photography: String,
  },
};
</script>
