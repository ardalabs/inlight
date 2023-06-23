<script setup>
import ElementBackground from "../components/common/ElementBackground.vue";
import commonButton from "../components/common/commonButton.vue";
import ProductCard from "../components/common/ProductCard.vue";
import TestimonialCard from "../components/common/TestimonialCard.vue";
</script>

<template>
  <div class="relatie max-w-sm m-auto my-12">
    <ElementBackground />

    <!-- hero section -->
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
              class="w-6 mt-4"
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
        <h2>
          We craft contemporary and high quality
          <span class="text-primary font-semibold">Indonesian</span> Made
          <span class="text-primary font-semibold">timber lighting</span>
          pieces.
        </h2>
        <p class="text-gray-500 mt-4">
          We craft thoughtfully Indonesian Made lighting from beautiful, locally
          sourced solid timber. We have been working with timber for over 35
          years and our small team of designers and woodworkers love to craft
          unique timber lighting pieces using both traditional and innovative
          woodworking techniques.
        </p>
      </div>
      <div class="mt-6">
        <img src="/homePage/hero2.png" alt="wooden pict" class="" />
      </div>
    </div>

    <!-- about us section -->
    <div class="mt-16">
      <div>
        <h1>About Us</h1>
        <p class="text-gray-500 mt-2">
          Fluxwood is a family-owned business consisting of a small team of
          craftspeople and designers. Our design studio, timber and electrical
          workshops are located in Currumbin, Queensland. We are proud to
          collaborate with other local skilled makers across Queensland who
          contribute to crafting the high quality components for our timber
          lighting range
        </p>
        <commonButton text="Read More" customClass="w-1/2 mt-4" />
      </div>
      <div class="mt-8">
        <img src="/homePage/about-us.png" alt="about us" />
      </div>
    </div>

    <!-- featured section -->
    <div class="mt-16">
      <div class="flex justify-between items-center mb-8">
        <h2>Featured Lighting</h2>
        <commonButton text="View All" />
      </div>
      <div class="carousel w-full">
        <div id="featured1" class="carousel-item relative w-full">
          <ProductCard
            img="/homePage/featured-1.png"
            title="Silo Timber Sienco"
            price="98.0"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
              href="#featured3"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❮</a
            >
            <a
              href="#featured2"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❯</a
            >
          </div>
        </div>
        <div id="featured2" class="carousel-item relative w-full">
          <ProductCard
            img="/homePage/featured-1.png"
            title="SIlo Timber Sienco"
            price="98.0"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
              href="#featured1"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❮</a
            >
            <a
              href="#featured3"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❯</a
            >
          </div>
        </div>
        <div id="featured3" class="carousel-item relative w-full">
          <ProductCard
            img="/homePage/featured-1.png"
            title="SIlo Timber Sienco"
            price="98.0"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
              href="#featured2"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❮</a
            >
            <a
              href="#featured1"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❯</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- testimonial section -->
    <div class="mt-16">
      <h2 class="font-semibold mb-8 text-center">Our Clients Testimonials</h2>
      <div class="carousel w-full">
        <div id="testimonial1" class="carousel-item relative w-full">
          <TestimonialCard
            img="/homePage/cust-1.png"
            peopleName="Rury Diwary"
            peopleJob="Gamily Pshycian"
            peopleTestimony="We love our new Tenn linear pendant. Shari has been very helpful throughout. Fluxwood is the only company who delivered on time without any delays. The design is slick and modern and the craftsmanship and quality is superb."
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2"
          >
            <a
              href="#testimonial3"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❮</a
            >
            <a
              href="#testimonial2"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❯</a
            >
          </div>
        </div>
        <div id="testimonial2" class="carousel-item relative w-full">
          <TestimonialCard
            img="/homePage/cust-1.png"
            peopleName="Rury Diwary"
            peopleJob="Gamily Pshycian"
            peopleTestimony="We love our new Tenn linear pendant. Shari has been very helpful throughout. Fluxwood is the only company who delivered on time without any delays. The design is slick and modern and the craftsmanship and quality is superb."
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2"
          >
            <a
              href="#testimonial1"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❮</a
            >
            <a
              href="#testimonial3"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❯</a
            >
          </div>
        </div>
        <div id="testimonial3" class="carousel-item relative w-full">
          <TestimonialCard
            img="/homePage/cust-1.png"
            peopleName="Rury Diwary"
            peopleJob="Gamily Pshycian"
            peopleTestimony="We love our new Tenn linear pendant. Shari has been very helpful throughout. Fluxwood is the only company who delivered on time without any delays. The design is slick and modern and the craftsmanship and quality is superb."
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2"
          >
            <a
              href="#testimonial2"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❮</a
            >
            <a
              href="#testimonial1"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❯</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- our collection section -->
    <div class="mt-16">
      <h2 class="mb-8">Our Collection</h2>
      <div class="carousel w-full">
        <div id="collection1" class="carousel-item relative w-full">
          <ProductCard
            img="/homePage/collection-1.png"
            title="Silo Timber Sienco"
            price="98.0"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
              href="#collection3"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❮</a
            >
            <a
              href="#collection2"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❯</a
            >
          </div>
        </div>
        <div id="collection2" class="carousel-item relative w-full">
          <ProductCard
            img="/homePage/collection-1.png"
            title="SIlo Timber Sienco"
            price="98.0"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
              href="#collection1"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❮</a
            >
            <a
              href="#collection3"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❯</a
            >
          </div>
        </div>
        <div id="collection3" class="carousel-item relative w-full">
          <ProductCard
            img="/homePage/collection-1.png"
            title="SIlo Timber Sienco"
            price="98.0"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
              href="#collection2"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❮</a
            >
            <a
              href="#collection1"
              class="bg-primary bg-opacity-50 py-3 px-3 text-center text-black"
              >❯</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
