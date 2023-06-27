<script setup>
import NavBar from "../components/common/NavBar/NavBar.vue";
import ElementBackground from "../components/common/ElementBackground.vue";
import Footer from "../components/common/Footer.vue";
</script>

<template>
  <NavBar />
  <div
    class="relatie m-auto mt-20 max-w-sm sm:max-w-[540px] md:max-w-[668px] lg:mt-28 lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px]"
  >
    <ElementBackground position="left" />
    <div class="xl:mt-40">
      <h2 class="leading-tight">Talk to us. We're here to help you</h2>
      <p class="mt-4 text-gray-500">
        Get in touch with our team, We look forward to helping you with your
        lighting project.
      </p>
    </div>

    <div class="lg:grid lg:grid-cols-2 lg:gap-x-10 xl:mt-12 2xl:mt-20">
      <div class="mt-8">
        <div class="w-full">
          <label class="label">
            <span class="label-text font-semibold text-black">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Revalina Putri"
            class="input mb-2 w-full border-primary border-opacity-50 bg-transparent"
          />
        </div>
        <div class="w-full">
          <label class="label">
            <span class="label-text font-semibold text-black">Email</span>
          </label>
          <input
            type="text"
            placeholder="revalinaaa11@gmail.com"
            class="input mb-2 w-full border-primary border-opacity-50 bg-transparent"
          />
        </div>
        <div class="w-full">
          <label class="label">
            <span class="label-text font-semibold text-black">Message</span>
          </label>
          <input
            type="text"
            placeholder="Tell us about inlight..."
            class="input mb-2 w-full border-primary border-opacity-50 bg-transparent"
          />
        </div>
        <div class="w-full">
          <label class="label">
            <span class="label-text font-semibold text-black"
              >Your Postcode</span
            >
          </label>
          <input
            type="text"
            placeholder="Write your postcode here"
            class="input mb-2 w-full border-primary border-opacity-50 bg-transparent"
          />
        </div>
        <div class="w-full">
          <label class="label">
            <span class="label-text font-semibold text-black"
              >How did you find us?</span
            >
          </label>
          <div class="grid grid-cols-2 gap-y-4">
            <label class="flex items-center">
              <input
                type="checkbox"
                class="checkbox-primary checkbox"
                name="find-us[]"
                value="pinterest"
              />
              <span class="ml-2">Pinterest</span>
            </label>
            <label class="flex items-center">
              <input
                type="checkbox"
                class="checkbox-primary checkbox"
                name="find-us[]"
                value="instagram"
              />
              <span class="ml-2">Instagram</span>
            </label>
            <label class="flex items-center">
              <input
                type="checkbox"
                class="checkbox-primary checkbox"
                name="find-us[]"
                value="web"
              />
              <span class="ml-2">Web Search</span>
            </label>
            <label class="flex items-center">
              <input
                type="checkbox"
                class="checkbox-primary checkbox"
                name="find-us[]"
                value="other"
              />
              <span class="ml-2">Other</span>
            </label>
          </div>
        </div>
      </div>
      <div class="mt-12">
        <img src="/contactUs/map.png" alt="map" class="w-full" />
      </div>
    </div>

    <div class="mt-16">
      <p class="font-semibold text-primary">Our Locations</p>
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-3 xl:grid-cols-3 xl:gap-x-10">
        <div class="mt-4">
          <h2 class="font-semibold leading-tight">Visit Our Office</h2>
          <h5 class="text-gray-500">Find us at these locations.</h5>
        </div>
        <div class="mt-8 lg:mt-4">
          <h4 class="font-semibold">Address</h4>
          <p class="mt-2 text-gray-500">
            7/35 Currumbin Creek Rd,Currumbin, QLD 4223 Australia(workshop
            visits by appointment only)
          </p>
        </div>
        <div class="mt-8 xl:mt-4">
          <div class="flex items-start justify-start gap-x-5">
            <img src="/contactUs/ic-clock.svg" alt="clock" />
            <div>
              <h4 class="font-semibold">Office Hours</h4>
              <p class="mt-2 text-gray-500">Mon-Fri 8:30am – 3:30pm</p>
            </div>
          </div>
          <div class="mt-4 flex items-start justify-start gap-x-5">
            <img src="/contactUs/ic-phone.svg" alt="phone" />
            <div>
              <h4 class="font-semibold">Phone Number</h4>
              <p class="mt-2 text-gray-500">(+62) 963 1381 7391</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script></script>
