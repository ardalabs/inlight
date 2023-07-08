<script setup>
import NavBar from "../components/common/NavBar/NavBar.vue";
import ElementBackground from "../components/common/ElementBackground.vue";
import Footer from "../components/common/Footer.vue";
</script>

<template>
  <NavBar />
  <div
    class="relatie m-auto mt-20 max-w-sm sm:max-w-[540px] md:max-w-[668px] lg:mt-28 xl:mt-40 xl:max-w-[1200px] 2xl:max-w-[1600px]"
  >
    <ElementBackground position="left" />
    <div v-if="isLoading">
      <p>loading....</p>
    </div>
    <div v-else>
      <div class="mb-20 xl:grid xl:grid-cols-2 xl:space-x-4 2xl:space-x-10">
        <div>
          <!-- product pict -->
          <div class="block xl:hidden">
            <img src="/common/ic-back.png" alt="back" class="w-7" @click="goBack()">
          </div>
          <div>
            <div v-if="jsonData.images != null" class="mt-10 xl:mt-0">
              <img :src="`${jsonData.images[currentImageIndex]}`" alt="" class="w-96 h-96 object-fill m-auto xl:w-[768px] xl:h-[768px]"/>
            </div>
            <div v-else class="mt-0">
              <img :src="`${jsonData.img_thumbnail}`" alt="" class="w-96 h-96 object-fill m-auto">
            </div>
          </div>
          <div class="mt-5 m-auto">
            <div class="carousel">
              <div class="carousel-item space-x-6" v-if="jsonData.images != null">
                <div v-for="(item, index) in jsonData.images" :key="index">
                  <img
                    :src="`${item}`"
                    alt="product"
                    class="w-24 rounded-md h-24 object-fill hover:cursor-pointer"
                    @click="changeImageIndex(index)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <!-- product description -->
          <div class="mt-8 xl:mt-0">
            <h2>{{ jsonData.product_name }}</h2>
            <p class="mt-1 text-gray-500">{{ jsonData.product_desc }}</p>
          </div>
  
          <!-- technical details -->
          <div class="mt-6">
            <div class="grid grid-cols-2 gap-5 2xl:grid-cols-3 2xl:gap-y-9">
              <div class="mt-2">
                <p class="font-semibold">Dimensions</p>
                <p class="mt-1 text-gray-500">
                  {{ jsonData.technical_details.dimensions }}
                </p>
              </div>
              <div class="mt-2">
                <p class="font-semibold">Material</p>
                <p class="mt-1 text-gray-500">
                  {{ jsonData.technical_details.material }}
                </p>
              </div>
              <div class="mt-2 2xl:mt-0">
                <p class="font-semibold">Input Power</p>
                <p class="mt-1 text-gray-500">
                  {{ jsonData.technical_details.input_power }}
                </p>
              </div>
              <div class="mt-2">
                <p class="font-semibold">CRI</p>
                <p class="mt-1 text-gray-500">
                  {{ jsonData.technical_details.cri }}
                </p>
              </div>
              <div class="mt-2">
                <p class="font-semibold">Warranty</p>
                <p class="mt-1 text-gray-500">
                  {{ jsonData.technical_details.warranty }}
                </p>
              </div>
              <div class="mt-2 2xl:mt-0">
                <p class="font-semibold">Ceiling Plate</p>
                <p class="mt-1 text-gray-500">
                  {{ jsonData.technical_details.ceiling_plate }}
                </p>
              </div>
              <div class="mt-2">
                <p class="font-semibold">LED Colour</p>
                <div
                  v-for="(item, i) in jsonData.technical_details.led_colour"
                  :key="i"
                >
                  <p class="mt-1 text-gray-500">
                    {{ item }}
                  </p>
                </div>
              </div>
              <div class="mt-2">
                <p class="font-semibold">Cable Colour</p>
                <p class="mt-1 text-gray-500">
                  {{ jsonData.technical_details.cable_colour }}
                </p>
              </div>
              <div class="mt-2 2xl:mt-0">
                <p class="font-semibold">Drop Length</p>
                <p class="mt-1 text-gray-500">
                  {{ jsonData.technical_details.drop_length }}
                </p>
              </div>
            </div>
          </div>
  
          <!-- price -->
          <div class="mt-10">
            <p class="text-gray-500">Start from</p>
            <h3 class="font-semibold text-primary">
              {{ jsonData.product_price }}
            </h3>
          </div>
  
          <!-- link to ecommerce -->
          <div class="mt-10" v-if="jsonData.tokopedia != 'Coming Soon'">
            <p class="text-gray-500">Order Now</p>
            <a :href="jsonData.tokopedia" target="_blank">
              <img src="/common/tokopedia.png" alt="tokopedia" class="mt-3 w-32 hover:cursor-pointer" />
            </a>
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
      id: this.$route.params.id,
      jsonData: {},
      isLoading: true,
      currentImageIndex: 0,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      try {
        axios.get("/db/collections.json").then((resp) => {
          this.jsonData = resp.data.data[this.id - 1];
        });

        this.isLoading = false;
      } catch (e) {
        console.log(e);
        this.isLoading = false;
      }
    },
    changeImageIndex(index) {
      this.currentImageIndex = index;
    },
    goBack(){
      this.$router.go(-1)
    }
  },
};
</script>
