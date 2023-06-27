<script setup>
import NavBar from "../components/common/NavBar/NavBar.vue";
import ElementBackground from "../components/common/ElementBackground.vue";
import ProductCard from "../components/common/ProductCard.vue";
import Footer from "../components/common/Footer.vue";
</script>

<template>
  <NavBar />
  <div
    class="relatie m-auto mt-20 max-w-sm sm:max-w-[540px] md:max-w-[668px] lg:mt-28 xl:mt-40 xl:max-w-[1200px] 2xl:max-w-[1400px]"
  >
    <div>
      <ElementBackground position="left" />
      <h2 class="text-center">Shop Lighting Collection</h2>
    </div>

    <div class="z-10">
      <div class="flex items-center justify-center">
        <div class="container-snap my-8 flex overflow-x-auto xl:mb-12">
          <div
            v-for="(item, index) in navigationItems"
            :key="index"
            @click="activateNavItem(index)"
            class="mx-8 flex-shrink-0 font-light text-gray-500 hover:cursor-pointer hover:text-primary"
            :class="{
              'h-[40px] rounded border-b-4 border-primary font-semibold text-primary':
                item.isActive,
            }"
          >
            <p>{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-for="(item, i) in navigationItems" :key="i">
      <div
        v-if="item.isActive && item.label === 'All Collection'"
        class="px-10 md:px-20 lg:px-0"
      >
        <div class="lg:grid lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
          <div v-for="(data, index) in jsonData" :key="index">
            <ProductCard
              :img="data.img_thumbnail"
              :title="data.product_name"
              :price="data.product_price"
              :customClass="'mb-10 lg:mb-0'"
            />
          </div>
        </div>
      </div>
      <div
        v-if="
          item.isActive &&
          (item.label === 'Linear Pendants' ||
            item.label === 'Pendant Light' ||
            item.label === 'Wall Lights')
        "
        class="px-10 md:px-20 lg:px-0"
      >
        <div class="lg:grid lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
          <div v-for="(data, index) in filteredData" :key="index">
            <ProductCard
              :img="data.img_thumbnail"
              :title="data.product_name"
              :price="data.product_price"
              :customClass="'mb-10 lg:mb-0'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      jsonData: [],
      filteredData: [],
      navigationItems: [
        { label: "All Collection", isActive: true },
        { label: "Linear Pendants", isActive: false },
        { label: "Pendant Light", isActive: false },
        { label: "Wall Lights", isActive: false },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("/db/ourWork.json")
        .then((resp) => {
          this.jsonData = resp.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    activateNavItem(index) {
      if (!this.navigationItems[index].isActive) {
        this.navigationItems.forEach((item, i) => {
          item.isActive = i === index;
          if (item.isActive) {
            this.filteredData = this.jsonData.filter(
              (el) => el.label === item.label
            );
          }
        });
      }
    },
  },
};
</script>
