<template>
  <section>
    <!-- Banner component -->
    <homepage-banner :banner="banner" />
    <!-- Slices block component -->
    <div class="container">
      <slice-zone type="homepage" queryType="single" />
    </div>
  </section>
</template>

<script>
// Imports for all components
import HomepageBanner from "~/components/HomepageBanner.vue";
import SliceZone from "vue-slicezone";

export default {
  name: "Home",
  layout: "homepage",
  components: {
    HomepageBanner,
    SliceZone
  },
  head() {
    return {
      title: "Prismic Nuxt.js Multi Page Website"
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get the home page content
      const homepage = (await $prismic.api.getSingle("homepage")).data;
      return { banner: homepage.homepage_banner[0] };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style></style>
