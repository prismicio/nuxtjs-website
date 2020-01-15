<template>
    <section class="homepage-banner" :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + banner.image.url + ')' }">
      <!-- Template for page title. -->
      <div class="banner-content container">
        <h2 class="banner-title">
          {{ $prismic.asText(banner.title) }}
        </h2>
        <!-- Template for page tagline. -->
        <p class="banner-description">{{ $prismic.asText(banner.tagline) }}</p>
        <prismic-link class="banner-button" :field="banner.button_link">
          {{ $prismic.asText(banner.button_label) }}
        </prismic-link>
      </div>
    </section>
</template>

<script>
export default {
  props: ['banner'],
  name: 'homepage-banner',
}
</script>

<style lang="sass" scoped>
.homepage-banner
  margin: -70px 0 80px
  padding: 10em 0 8em
  background-position: center center
  background-size: cover
  color: #ffffff
  line-height: 1.75
  text-align: center

.banner-content
  text-align: center

.banner-title, .banner-description
  width: 90%
  max-width: 490px
  margin-left: auto
  margin-right: auto

.banner-title
  color: #ffffff
  font-size: 70px
  font-weight: 900
  line-height: 70px

.banner-button
  background: #ffffff
  border-radius: 7px
  color: #484D52
  font-size: 14px
  font-weight: 700
  padding: 15px 40px
  &:hover
    background: #c8c9cb

@media (max-width: 767px)
  .homepage-banner
    margin: 0 0 40px
    padding: 10em 0 6em
  .banner-title
    font-size: 50px
    line-height: 50px
</style>
