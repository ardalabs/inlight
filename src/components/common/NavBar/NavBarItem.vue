<template>
  <div v-if="isMobileView === 'true'">
    <router-link :to="path" @click="toggleDrawer">
      <p
        class="rounded-md p-4 text-gray-500 transition-all hover:cursor-pointer hover:bg-black hover:bg-opacity-90 hover:text-white"
        :class="[
          this.$route.path === path
            ? 'bg-primary py-3 font-semibold text-white'
            : 'text-black',
        ]"
      >
        {{ text }}
      </p>
    </router-link>
  </div>

  <div v-if="isMobileView === 'false'">
    <router-link :to="path">
      <p
        class="hover:cursor-pointer hover:text-black"
        :class="[
          this.$route.path === path
            ? 'font-semibold text-black'
            : 'text-gray-500',
        ]"
      >
        {{ text }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    text: String,
    isMobileView: String,
  },
};
</script>
