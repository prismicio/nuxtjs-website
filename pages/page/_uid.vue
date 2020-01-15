<template>
  <section class="page">
    <!-- Vue tag to add header component -->
    <header-prismic :menuLinks="menuLinks"/>
    <!-- Slices block component -->
    <slices-block :slices="slices"/>
  </section>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
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
  async asyncData({ params, error, req }) {
    try{
      // Fetching the API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      // Query to get post content
      let document = {}
      const result = await api.getByUID("page", params.uid)
      document = result.data

      // Query to get the menu content
      let menuContent = {}
      const menu = await api.getSingle('menu')
      menuContent = menu.data

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      return {
        // Post content
        document,
        documentId: result.id,

        // Set slices as variable
        slices: document.page_content,

        // Menu
        menuContent,
        menuLinks: menuContent.menu_links
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>