<template>
  <router-link :to="path" @click="toggleDrawer">
    <p
      class="text-gray-500 hover:cursor-pointer hover:bg-black p-4 rounded-md hover:bg-opacity-90 hover:text-white transition-all"
      :class="[
        this.$route.path === path
          ? 'bg-primary py-3 font-semibold text-white'
          : 'text-black',
      ]"
    >
      {{ text }}
    </p>
  </router-link>
</template>

<script>
export default {
  props: {
    path: String,
    text: String,
  },
};
</script>
