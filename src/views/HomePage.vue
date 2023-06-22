<script setup>
import ElementBackground from '../components/common/ElementBackground.vue';
import commonButton from '../components/common/commonButton.vue';
</script>

<template>
  <div class="relatie max-w-sm m-auto my-12">
    <ElementBackground />

    <!-- first section -->
    <div class="z-50">
      <div class="">
        <h1>Indonesia Timber Lighting</h1>
        <p class="text-gray-500 mt-2">
          Offering a captivating array of timber-based lighting products that
          illuminate any space with timeless elegance.
        </p>
        <div class="flex justify-start gap-x-6 items-center">
          <commonButton text="Explore Now" />
          <div class="px-4 py-3 bg-white flex items-center gap-x-4 mt-4">
            <p class="">Our Collection</p>
            <img
              src="/common/ic-arrow-right.svg"
              alt="Arrow Right"
              class="w-6"
            />
          </div>
        </div>
      </div>
      <div class="mt-14">
        <img src="/homePage/hero.png" alt="hero" />
      </div>
    </div>

    <!-- second section -->
    <div class="mt-16">
      <div>
        <h2>We craft contemporary and high quality <span class="text-primary font-semibold">Indonesian</span> Made <span class="text-primary font-semibold">timber lighting</span> pieces.</h2>
        <p class="text-gray-500 mt-4">We craft thoughtfully Indonesian Made lighting from beautiful, locally sourced solid timber. We have been working with timber for over 35 years and our small team of designers and woodworkers love to craft unique timber lighting pieces using both traditional and innovative woodworking techniques. </p>
      </div>
      <div class="mt-6">
        <img src="/homePage/hero2.png" alt="wooden pict" class="">
      </div>
    </div>

    <!-- third section -->
    <div class="mt-16">
      <div>
        <h1>About Us</h1>
        <p class="text-gray-500 mt-2">Fluxwood is a family-owned business consisting of a small team of craftspeople and designers. Our design studio, timber and electrical workshops are located in Currumbin, Queensland. We are proud to collaborate with other local skilled makers across Queensland who contribute to crafting the high quality components for our timber lighting range</p>
        <commonButton text="Read More" customClass="w-1/2" />
      </div>
      <div class="mt-8">
        <img src="/homePage/about-us.png" alt="about us">
      </div>
    </div>
  </div>
</template>
