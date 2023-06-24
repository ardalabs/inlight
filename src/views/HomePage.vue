<script setup>
import ElementBackground from "../components/common/ElementBackground.vue";
import commonButton from "../components/common/commonButton.vue";
import ProductCard from "../components/common/ProductCard.vue";
import TestimonialCard from "../components/common/TestimonialCard.vue";
import Footer from "../components/common/Footer.vue";
</script>

<template>
  <div class="relatie max-w-sm sm:max-w-md m-auto my-12">
    <ElementBackground />

    <!-- hero section -->
    <div class="z-50">
      <div class="">
        <h1 class="leading-tight">Indonesia Timber Lighting</h1>
        <p class="text-gray-500 mt-2">
          Offering a captivating array of timber-based lighting products that
          illuminate any space with timeless elegance.
        </p>
        <div class="flex justify-start gap-x-6 items-center mt-6">
          <commonButton text="Explore Now" />
          <div class="px-4 py-3 hover:bg-slate-100 flex items-center gap-x-4">
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
        <h3 class="leading-tight">
          We craft contemporary and high quality
          <span class="text-primary font-semibold">Indonesian</span> Made
          <span class="text-primary font-semibold">timber lighting</span>
          pieces.
        </h3>
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
        <h5 class="text-gray-500 mt-2">
          Fluxwood is a family-owned business consisting of a small team of
          craftspeople and designers. Our design studio, timber and electrical
          workshops are located in Currumbin, Queensland. We are proud to
          collaborate with other local skilled makers across Queensland who
          contribute to crafting the high quality components for our timber
          lighting range
        </h5>
        <commonButton text="Read More" customClass="w-44 mt-4" />
      </div>
      <div class="mt-8">
        <img src="/homePage/about-us.png" alt="about us" />
      </div>
    </div>

    <!-- featured section -->
    <div class="mt-16">
      <div class="flex justify-between items-center mb-8">
        <h2 class="leading-tight">Featured Lighting</h2>
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
      <ElementBackground />
      <h3 class="font-semibold mb-8 text-center">Our Clients Testimonials</h3>
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

    <!-- value section -->
    <div class="mt-16">
      <h1>Our Value</h1>
      <div class="mt-8">
        <img src="/homePage/value.png" alt="value pict" />
        <div class="mt-8">
          <div>
            <div class="flex justify-between items-center px-4" mt-4>
              <h4 class="col-span-6">Authentic Design</h4>
              <img
                src="/common/ic-arrow-down.svg"
                alt="arrow-down"
                class="col-span-1"
              />
            </div>
            <hr class="border-gray-800 rounded-full" />
          </div>
          <div>
            <div class="flex justify-between items-center px-4 mt-4">
              <h4 class="col-span-6">Quality Solid Timber Lighting</h4>
              <img
                src="/common/ic-arrow-down.svg"
                alt="arrow-down"
                class="col-span-1"
              />
            </div>
            <hr class="border-gray-800 rounded-full" />
          </div>
          <div>
            <div class="flex justify-between items-center px-4 mt-4">
              <h4 class="col-span-6">Indonesian Made Lighting</h4>
              <img
                src="/common/ic-arrow-down.svg"
                alt="arrow-down"
                class="col-span-1"
              />
            </div>
            <hr class="border-gray-800 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />

</template>

