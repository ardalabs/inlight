<script setup>
import NavBar from "../components/common/NavBar/NavBar.vue";
import ElementBackground from "../components/common/ElementBackground.vue";
import TextCard from "../components/projects/TextCard.vue";
import Footer from "../components/common/Footer.vue";
</script>

<template>
  <NavBar />
  <div
    class="relatie m-auto mt-20 max-w-sm sm:max-w-[540px] md:max-w-[668px] lg:mt-28 lg:max-w-[980px] xl:mt-40 xl:max-w-[1200px] 2xl:max-w-[1400px]"
  >
    <ElementBackground position="left" />
    <h2>Featured Projects</h2>
    <div class="mt-8">
      <div>
        <h3>Residential</h3>
      </div>
      <div>
        <img
          src="/projects/featured-1.png"
          alt="featured"
          class="mt-4 w-full"
        />
        <TextCard
          title="Keck Haus"
          description="We worked with Polina Radchenko on Keck Haus to create a minimal feature pendant for the kitchen island. Using our Hollow Pendant design crafted in White Oak, we created a custom timber stain finish to suit the cabinetry and benchtops. “The brief was to create a calm, balanced space that was humble yet beautiful. The space had to be highly functional as well to serve the needs of a young family, husband and wife with two beautiful teenage girls and a gorgeous caboodle dog. A portion of the home was fitted out as an office, home to the clients’ family business which Polina Radchenko Interiors designed as such, along with the workstations, office storage and brand signage. The colour palette features soft timber colouring, contrasted by dark fluted panelling and gunmetal tapware. Furniture and accessories selections add colour to the space while still keeping it predominantly calm and reserved. Full-height joinery, tall sculptural lighting and floor-to-ceiling curtains – all designed to emphasize the high ceilings and volume"
          interior="Polina Radchenko"
          architecture="Benjamin Walters"
          builder="Luxury Lifestyle Homes"
          photography="Cathy Schusler"
        />
      </div>
    </div>
    <div class="mt-16 xl:mt-28">
      <div
        class="bg-primary bg-opacity-20 px-12 py-12 lg:grid lg:grid-cols-2 lg:px-24 xl:grid-cols-3 xl:gap-x-8"
      >
        <img
          src="/projects/featured2-1.png"
          alt="featured"
          class="m-auto mb-6 2xl:mb-0"
        />
        <img
          src="/projects/featured2-2.png"
          alt="featured"
          class="m-auto mb-6 2xl:mb-0"
        />
        <img src="/projects/featured2-3.png" alt="featured" class="m-auto" />
      </div>
      <TextCard
        title="Kira House"
        description="Our Tenn Pendant was chosen as a feature piece for this stunning kitchen design by Kira and Kira for the Kira House, Gold Coast. With the Walnut veneer featured throughout the cabinetry and kitchen island design, we recommended a Tasmanian Blackwood Tenn Pendant to compliment the kitchen in shape and colour. Careful selection of the timber piece used created a beautiful match to surrounding kitchen and interior design."
        interior="Kira and Kira"
        architecture="Davey Constructions"
        builder="-"
        photography="Andy Macpherson"
      />
    </div>
  </div>
  <Footer />
</template>
