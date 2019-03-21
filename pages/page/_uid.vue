<template>
  <section class="page">
    <!-- Vue tag to add header component -->
    <header-prismic :menuLinks="menuLinks"/>
    <div class="container">
      <!-- Button to edit document in dashboard -->
      <prismic-edit-button :documentId="documentId"/>
      <!-- Slice section template -->
      <section v-for="(slice, index) in slices" :key="'slice-' + index">
        <!-- Text slice component -->
        <template v-if="slice.slice_type === 'text_section'">
          <text-slice :slice="slice"/>
        </template>
        <!-- Quote slice component -->
        <template v-else-if="slice.slice_type === 'quote'">
          <quote-slice :slice="slice"/>
        </template>
        <!-- Full Width Image slice component -->
        <template v-else-if="slice.slice_type === 'full_width_image'">
          <full-width-image :slice="slice"/>
        </template>
        <!-- Image Gallery slice component -->
        <template v-else-if="slice.slice_type === 'image_gallery'">
          <image-gallery :slice="slice"/>
        </template>
        <!-- Image Highlight slice component -->
        <template v-else-if="slice.slice_type === 'image_highlight'">
          <image-highlight :slice="slice"/>
        </template>
      </section>
    </div>
  </section>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"

// imports for all components
import HeaderPrismic from '~/components/HeaderPrismic.vue'
import TextSlice from '~/components/slices/TextSlice.vue'
import QuoteSlice from '~/components/slices/QuoteSlice.vue'
import FullWidthImage from '~/components/slices/FullWidthImage.vue'
import ImageGallery from '~/components/slices/ImageGallery.vue'
import ImageHighlight from '~/components/slices/ImageHighlight.vue'

export default {
  name: 'page',
  components: {
    HeaderPrismic,
    TextSlice,
    QuoteSlice,
    FullWidthImage,
    ImageGallery,
    ImageHighlight
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
  async asyncData({ params, error, req }) {
    try{
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      //Query to get post content
      let document = {}
      const result = await api.getByUID("page", params.uid)
      document = result.data

      let menuContent = {}
      const menu = await api.getSingle('menu')
      menuContent = menu.data

      let menulinks = menuContent.menu_links

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      return {
        document,
        documentId: result.id,
        slices: document.page_content,
        menuContent,
        menuLinks: menuContent.menu_links,
      }
    } catch (e) {
      //returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>