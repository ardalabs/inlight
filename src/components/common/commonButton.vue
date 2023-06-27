<template>
  <div
    class="flex items-center justify-between gap-x-4 bg-primary px-4 py-3 transition-colors hover:cursor-pointer hover:bg-dark-primary"
    :class="customClass"
  >
    <p class="text-white">{{ text }}</p>
    <img
      src="/common/ic-circle-arrow-right.png"
      alt="Arrow Right"
      class="w-6"
    />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    customClass: {
      type: String,
    },
  },
};
</script>
