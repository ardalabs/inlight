<script setup>
import ElementBackground from "../components/common/ElementBackground.vue";
import commonButton from "../components/common/commonButton.vue";
import ProductCard from "../components/common/ProductCard.vue";
import Footer from "../components/common/Footer.vue";
import NavBar from "../components/common/NavBar/NavBar.vue";
import Testimonial from "../components/homePage/Testimonial.vue";
</script>

<template>
  <NavBar />
  <div
    class="relatie m-auto mt-20 max-w-sm sm:max-w-[540px] md:max-w-[668px] lg:max-w-[950px] xl:mt-28 xl:max-w-[1200px] 2xl:max-w-[1400px]"
  >
    <ElementBackground position="left" />

    <!-- hero section -->
    <div class="z-50">
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-10">
        <div class="flex flex-col justify-center">
          <h1 class="leading-tight">Indonesia Timber Lighting</h1>
          <p class="mt-2 text-gray-500">
            Offering a captivating array of timber-based lighting products that
            illuminate any space with timeless elegance.
          </p>
          <div class="mt-6 flex items-center justify-start gap-x-6">
            <commonButton text="Explore Now" />
            <div class="flex items-center gap-x-4 px-4 py-3 hover:bg-slate-300 hover:cursor-pointer">
              <p class="">Our Collection</p>
              <img
                src="/common/ic-arrow-right.svg"
                alt="Arrow Right"
                class="w-6"
              />
            </div>
          </div>
        </div>
        <div class="mt-14 flex justify-end">
          <img src="/homePage/hero.png" alt="hero" />
        </div>
      </div>
    </div>

    <!-- second section -->
    <div
      class="mt-16 lg:flex lg:flex-row-reverse lg:items-center lg:gap-x-10 xl:mt-32"
    >
      <div class="lg:w-1/2">
        <h3 class="leading-tight">
          We craft contemporary and high quality
          <span class="font-semibold text-primary">Indonesian</span> Made
          <span class="font-semibold text-primary">timber lighting</span>
          pieces.
        </h3>
        <p class="mt-4 text-gray-500">
          We craft thoughtfully Indonesian Made lighting from beautiful, locally
          sourced solid timber. We have been working with timber for over 35
          years and our small team of designers and woodworkers love to craft
          unique timber lighting pieces using both traditional and innovative
          woodworking techniques.
        </p>
      </div>
      <div class="mt-6 lg:mt-0 lg:w-1/2">
        <img
          src="/homePage/hero2.png"
          alt="wooden pict"
          class="md:w-3/4 xl:w-full"
        />
      </div>
    </div>

    <!-- about us section -->
    <div class="mt-16 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-x-10 xl:mt-32">
      <div class="flex flex-col justify-center">
        <h1>About Us</h1>
        <p class="mt-2 text-gray-500">
          Fluxwood is a family-owned business consisting of a small team of
          craftspeople and designers. Our design studio, timber and electrical
          workshops are located in Currumbin, Queensland. We are proud to
          collaborate with other local skilled makers across Queensland who
          contribute to crafting the high quality components for our timber
          lighting range
        </p>
        <commonButton text="Read More" customClass="w-44 mt-4" />
      </div>
      <div class="mt-8">
        <img src="/homePage/about-us.png" alt="about us" class="w-full" />
      </div>
    </div>

    <!-- featured section -->
    <div class="mt-16 lg:mt-24 xl:mt-32">
      <div class="mb-8 flex items-center justify-between">
        <h2 class="leading-tight">Featured Lighting</h2>
        <commonButton text="View All" />
      </div>
      <div class="carousel w-full gap-x-10">
        <div class="carousel-item">
          <ProductCard
            img="/homePage/featured-1.png"
            title="Silo Timber Sienco 1"
            price="98.0"
          />
        </div>
        <div class="carousel-item">
          <ProductCard
            img="/homePage/featured-1.png"
            title="Silo Timber Sienco 2"
            price="98.0"
          />
        </div>
        <div class="carousel-item">
          <ProductCard
            img="/homePage/featured-1.png"
            title="Silo Timber Sienco 3"
            price="98.0"
          />
        </div>
        <div class="carousel-item">
          <ProductCard
            img="/homePage/featured-1.png"
            title="Silo Timber Sienco 3"
            price="98.0"
          />
        </div>
        <div class="carousel-item">
          <ProductCard
            img="/homePage/featured-1.png"
            title="Silo Timber Sienco 3"
            price="98.0"
          />
        </div>
        <div class="carousel-item">
          <ProductCard
            img="/homePage/featured-1.png"
            title="Silo Timber Sienco 3"
            price="98.0"
          />
        </div>
      </div>
    </div>

    <!-- testimonial section -->
    <div class="mt-16 lg:mt-24 xl:mt-32">
      <ElementBackground position="right" />
      <h3 class="mb-8 text-center font-semibold xl:mb-16">
        Our Clients Testimonials
      </h3>
      <Testimonial />
    </div>

    <!-- our collection section -->
    <div class="mt-16 lg:mt-24 xl:mt-32">
      <h2 class="mb-8">Our Collection</h2>
      <div class="carousel w-full gap-x-10">
        <div class="carousel-item">
          <ProductCard
            img="/homePage/collection-1.png"
            title="Silo Timber Sienco"
            price="98.0"
          />
        </div>
        <div class="carousel-item">
          <ProductCard
            img="/homePage/collection-1.png"
            title="Silo Timber Sienco"
            price="98.0"
          />
        </div>
        <div class="carousel-item">
          <ProductCard
            img="/homePage/collection-1.png"
            title="Silo Timber Sienco"
            price="98.0"
          />
        </div>
        <div class="carousel-item">
          <ProductCard
            img="/homePage/collection-1.png"
            title="Silo Timber Sienco"
            price="98.0"
          />
        </div>
        <div class="carousel-item">
          <ProductCard
            img="/homePage/collection-1.png"
            title="Silo Timber Sienco"
            price="98.0"
          />
        </div>
        <div class="carousel-item">
          <ProductCard
            img="/homePage/collection-1.png"
            title="Silo Timber Sienco"
            price="98.0"
          />
        </div>
      </div>
    </div>

    <!-- value section -->
    <div class="mt-16 lg:mt-24 xl:mt-32">
      <h1>Our Values</h1>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-x-10">
        <img src="/homePage/value.png" alt="value pict" class="w-full" />
        <div class="mt-8 flex flex-col justify-center">
          <div>
            <div class="flex items-center justify-between px-4" mt-4>
              <h4 class="col-span-6">Authentic Design</h4>
              <img
                src="/common/ic-arrow-down.svg"
                alt="arrow-down"
                class="col-span-1"
              />
            </div>
            <hr class="rounded-full border-gray-800" />
          </div>
          <div>
            <div class="mt-4 flex items-center justify-between px-4">
              <h4 class="col-span-6">Quality Solid Timber Lighting</h4>
              <img
                src="/common/ic-arrow-down.svg"
                alt="arrow-down"
                class="col-span-1"
              />
            </div>
            <hr class="rounded-full border-gray-800" />
          </div>
          <div>
            <div class="mt-4 flex items-center justify-between px-4">
              <h4 class="col-span-6">Indonesian Made Lighting</h4>
              <img
                src="/common/ic-arrow-down.svg"
                alt="arrow-down"
                class="col-span-1"
              />
            </div>
            <hr class="rounded-full border-gray-800" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
