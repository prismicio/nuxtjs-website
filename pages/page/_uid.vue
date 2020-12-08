<template>
  <section>
    <!-- Slices block component -->
    <div class="container">
      <slice-zone type="page" :uid="$route.params.uid" />
    </div>
  </section>
</template>

<script>
// Imports for Prismic Slice components
import SliceZone from "vue-slicezone";

export default {
  name: "page",
  components: {
    SliceZone
  },
  head() {
    return {
      title: "Prismic Nuxt.js Multi Page Website"
    };
  }
};
</script>
