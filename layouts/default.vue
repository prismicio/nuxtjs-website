<template>
  <div>
    <nuxt />
    <footer-prismic/>
  </div>
</template>

<script>
import FooterPrismic from '~/components/FooterPrismic.vue'

export default {
  components: {
    FooterPrismic
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
  }
}
</script>
