<template>
  <section class="page">
    <!-- Vue tag to add header component -->
    <header-prismic/>
    <!-- Slices block component -->
    <slices-block :slices="slices"/>
  </section>
</template>

<script>
// Imports for all components
import HeaderPrismic from '~/components/HeaderPrismic.vue'
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'page',
  components: {
    HeaderPrismic,
    SlicesBlock,
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const document = (await $prismic.api.getByUID('page', params.uid)).data

      return {
        // Set slices as variable
        slices: document.page_content
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
