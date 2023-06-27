<template>
  <img
    src="/common/element-bg.png"
    alt="background element"
    class="absolute -z-10 xl:w-1/3 2xl:w-1/2"
    :class="[
      position === 'left'
        ? '-left-14 xl:left-0'
        : '-right-14 rotate-180 transform xl:right-0',
    ]"
  />
</template>

<script>
export default {
  props: {
    position: String,
  },
};
</script>
