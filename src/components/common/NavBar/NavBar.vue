<script setup>
import NavBarItem from "./NavBarItem.vue";
</script>

<template>
  <div class="top-0 absolute">
    <!-- mobile and tab screen -->
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
                <img src="/common/ic-menu.png" alt="menu" />
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
          <div
            class="hover:cursor-pointer flex justify-end"
            @click="toggleDrawer"
          >
            <img
              src="/common/ic-close.png"
              alt="close"
              class="object-right mr-3 w-4 mt-3 mb-4"
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
          <NavBarItem path="/our-team" text="Our Team" isMobileView="true" />
        </div>
      </div>
    </div>

    <!-- laptop screen -->
    <div class="hidden xl:block">
      <div class="fixed w-full z-50">
        <nav :class="navbarClasses">
          <div class="flex items-center justify-between px-20 py-6 2xl:px-56">
            <div class="w-1/10">
              <a href="/">
                <img src="/light-inlight.png" alt="Logo" class="" />
              </a>
            </div>
            <div class="w-9/10">
              <div class="flex gap-x-8 items-center justify-end">
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
                <NavBarItem
                  path="/our-team"
                  text="Our Team"
                  isMobileView="false"
                />
                <input
                  type="text"
                  placeholder="Search"
                  class="input bg-slate-100 bg-opacity-50 w-1/5 rounded-md"
                />
                <img src="/common/ic-shopping-bag.png" alt="shopping bag" />
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
