<template>
  <div class="px-4 py-3 bg-primary flex items-center gap-x-4" :class="customClass">
    <p class="text-white">{{text}}</p>
    <img
      src="/common/ic-circle-arrow-right.png"
      alt="Arrow Right"
      class="w-6"
    />
  </div>
</template>

<script>
export default{
  props:{
    text:{
      type: String,
    },
    customClass:{
      type: String,
    }
  }
}
</script>
