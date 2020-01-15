<template>
  <section class='highlight content-section'>
    <div class="highlight-left">
      <prismic-rich-text :field="slice.primary.title"/>
      <prismic-rich-text :field="slice.primary.headline"/>
      <p>
        <prismic-link :field="slice.primary.link">{{ $prismic.asText(slice.primary.link_label) }}</prismic-link>
      </p>
    </div>
    <div class="highlight-right">
      <prismic-image :field="slice.primary.featured_image"/>
    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'image-highlight'
}
</script>

<style lang="sass" scoped>
.highlight
  position: relative
  overflow: auto

.highlight-left
  width: 43%
  float: left

.highlight-right
  width: 48%
  float: right

@media (max-width: 767px)
  .content-section
    margin-bottom: 2rem
  .highlight-left, .highlight-right
    width: 100%
    float: none
</style>

