<template>
  <section class='full-width-image content-section'>
      <prismic-image :field="slice.primary.image"/>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'image-caption-slice'
}
</script>