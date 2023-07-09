<script setup>
import NavBarItem from "./NavBarItem.vue";
</script>

<template>
  <div class="absolute top-0">
    <!-- mobile and tab screen -->
    <div class="block xl:hidden">
      <div class="fixed z-50 w-full">
        <nav :class="navbarClasses">
          <div class="flex items-center justify-between px-12 py-5 lg:px-32">
            <div class="w-1/2">
              <a href="/#home">
                <img src="/light-inlight.png" alt="Logo" class="w-20 lg:w-28" />
              </a>
            </div>
            <div class="flex w-1/2 justify-end" @click="toggleDrawer()">
              <div class="w-6 hover:cursor-pointer">
                <img src="/common/ic-menu.png" alt="menu" />
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- canvas -->
      <div
        class="fixed z-50 h-full w-80 bg-white px-10 py-4 transition-all ease-in"
        :class="isDrawerOpen ? 'visible-canvas' : 'hidden-canvas'"
      >
        <div class="flex flex-col gap-y-2 text-black">
          <div
            class="flex justify-end hover:cursor-pointer"
            @click="toggleDrawer"
          >
            <img
              src="/common/ic-close.png"
              alt="close"
              class="mb-4 mr-3 mt-3 w-4 object-right"
            />
          </div>
          <NavBarItem path="/" text="Home" isMobileView="true" />
          <NavBarItem
            path="/collections"
            text="Collections"
            isMobileView="true"
          />
          <NavBarItem path="/projects" text="Projects" isMobileView="true" />
          <NavBarItem
            path="/contact-us"
            text="Contact Us"
            isMobileView="true"
          />
          <!-- <NavBarItem path="/our-team" text="Our Team" isMobileView="true" /> -->
        </div>
      </div>
    </div>

    <!-- laptop screen -->
    <div class="hidden xl:block">
      <div class="fixed z-50 w-full">
        <nav :class="navbarClasses">
          <div class="flex items-center justify-between px-20 py-6 2xl:px-56">
            <div class="w-1/10">
              <a href="/">
                <img src="/light-inlight.png" alt="Logo" class="" />
              </a>
            </div>
            <div class="w-9/10">
              <div class="flex items-center justify-end gap-x-8">
                <NavBarItem path="/" text="Home" isMobileView="false" />
                <NavBarItem
                  path="/collections"
                  text="Collections"
                  isMobileView="false"
                />
                <NavBarItem
                  path="/projects"
                  text="Projects"
                  isMobileView="false"
                />
                <NavBarItem
                  path="/contact-us"
                  text="Contact Us"
                  isMobileView="false"
                />
                <!-- <NavBarItem
                  path="/our-team"
                  text="Our Team"
                  isMobileView="false"
                /> -->
                <input
                  type="text"
                  placeholder="Search"
                  class="input w-1/5 rounded-md bg-slate-100 bg-opacity-50"
                />
                <img src="/common/ic-shopping-bag.png" alt="shopping bag" class="hover:cursor-pointer"/>
              </div>
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
