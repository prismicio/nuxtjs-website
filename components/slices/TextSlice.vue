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
  -moz-column-count: 2
  column-count: 2
  -webkit-column-gap: 40px
  -moz-column-gap: 40px
  column-gap: 40px

.text-section-1col img, .text-section-2col img, .gallery img
  margin-bottom: 1rem

.text-section-1col p:last-child, .text-section-2col p:last-child, .content-section.text-section-2col
  margin-bottom: 0

@media (max-width: 767px)
  .text-section-2col
    -webkit-column-count: 1
    -moz-column-count: 1
    column-count: 1
    -webkit-column-gap: 40px
    -moz-column-gap: 40px
    column-gap: 40px
</style>

