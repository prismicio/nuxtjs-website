<template>
  <prismic-rich-text class="content-section" :class="'text-section-' + slice.slice_label" :field="slice.primary.rich_text"/>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice'
}
</script>

<style lang="sass" scoped>
.text-section-2col
  -webkit-column-count: 2
  // Chrome, Safari, Opera
  -moz-column-count: 2
  // Firefox
  column-count: 2
  -webkit-column-gap: 40px
  // Chrome, Safari, Opera
  -moz-column-gap: 40px
  // Firefox
  column-gap: 40px

.text-section-1col img, .text-section-2col img, .gallery img
  margin-bottom: 1rem

.text-section-1col p:last-child, .text-section-2col p:last-child
  margin-bottom: 0
</style>

