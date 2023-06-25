<script setup>
import NavBarItem from "./NavBarItem.vue";
</script>

<template>
  <div class="top-0 absolute">
    <div class="block xl:hidden">
      <div class="w-full fixed z-50">
        <nav :class="navbarClasses">
          <div class="flex justify-between items-center px-12 py-5 lg:px-32">
            <div class="w-1/2">
              <a href="/#home">
                <img src="/light-inlight.png" alt="Logo" class="w-20 lg:w-28" />
              </a>
            </div>
            <div class="w-1/2 flex justify-end" @click="toggleDrawer()">
              <div class="w-6 hover:cursor-pointer">
                <img src="/common/ic-menu.png" alt="menu">
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- canvas -->
      <div
        class="bg-white w-80 h-full fixed z-50 px-10 py-4 transition-all ease-in"
        :class="isDrawerOpen ? 'visible-canvas' : 'hidden-canvas'"
      >
        <div class="flex flex-col gap-y-2 text-black">
          <div class="hover:cursor-pointer flex justify-end" @click="toggleDrawer">
            <img src="/common/ic-close.png" alt="close" class="object-right mr-3 w-4 mt-3 mb-4">
          </div>
          <NavBarItem path="/" text="Home" />
          <NavBarItem path="/collections" text="Collections" />
          <NavBarItem path="/projects" text="Projects" />
          <NavBarItem path="/contact-us" text="Contact Us" />
          <NavBarItem path="/our-team" text="Our Team" />
        </div>
      </div>
    </div>

    <!-- lg screen -->
    <div class="hidden xl:block">
      <div class="fixed w-full z-50">
        <nav :class="navbarClasses">
          <div class="flex items-center justify-between px-28 xl:py-8 lg:py-4">
            <div class="w-1/10">
              <a href="/#home">
                <!-- <img src="/logo.svg" alt="Logo" class="w-2/3" /> -->
              </a>
            </div>
            <div class="w-8/10">
              <div
                class="flex gap-x-12 xl:gap-x-20 text-white font-semibold text-md xl:text-lg hover:cursor-pointer"
              >
                <p
                  class="hover:text-pink-700 hover:underline hover:underline-offset-8 text-sm lg:text-md xl:text-lg 2xl:text-xl transition-all"
                >
                  <a href="/#about">Aboutw-80</a>
                </p>
                <p
                  class="hover:text-pink-700 hover:underline hover:underline-offset-8 text-sm lg:text-md xl:text-lg 2xl:text-xl transition-all"
                >
                  <a href="/#skills">Skills</a>
                </p>
                <p
                  class="hover:text-pink-700 hover:underline hover:underline-offset-8 text-sm lg:text-md xl:text-lg 2xl:text-xl transition-all"
                >
                  <a href="/#projects">Projects</a>
                </p>
                <p
                  class="hover:text-pink-700 hover:underline hover:underline-offset-8 text-sm lg:text-md xl:text-lg 2xl:text-xl transition-all"
                >
                  <a href="/#experiences">Experiences</a>
                </p>
              </div>
            </div>
            <div class="w-1/10">
              <a href="/#contact">
                <button
                  class="border border-white py-1 px-4 text-sm xl:text-lg 2xl:text-xl text-white font-semibold hover:bg-pink-700 hover:border-pink-700"
                >
                  Contact
                </button>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style>
.hidden-canvas {
  right: -320px;
}

.visible-canvas {
  right: 0px;
}
</style>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isDrawerOpen: false,
    };
  },
  computed: {
    navbarClasses() {
      return {
        "bg-white": this.isScrolled,
        "bg-opacity-10": this.isScrolled,
        "backdrop-filter": this.isScrolled,
        "backdrop-blur-md": this.isScrolled,
        "text-white": this.isScrolled,
        "text-black": !this.isScrolled,
        "shadow-md": this.isScrolled,
        "shadow-none": !this.isScrolled,
        "transition-all": true,
        "duration-300": true,
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.pageYOffset > 0;
    },
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
      console.log(this.isDrawerOpen);
    },
  },
};
</script>
