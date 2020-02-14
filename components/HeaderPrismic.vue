<template>
  <header class="site-header">
    <p v-if="$store.state.menu === 'Please create a menu document'" class="logo">{{ $store.state.menu }}</p>
    <nuxt-link to="/" class="logo">{{ $prismic.asText($store.state.menu.title) }}</nuxt-link>
    <nav>
      <ul>
        <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
          <prismic-link :field="menuLink.link">{{ $prismic.asText(menuLink.label) }}</prismic-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header-prismic',
}
</script>

<style lang="sass">
.site-header
  height: 30px
  padding: 20px 0
  color: #484d52
  font-weight: 700
  a
    color: #484d52
    font-weight: 700
  nav a:hover
    color: #72767B

.homepage .site-header
  color: #ffffff
  a
    color: #ffffff
  nav a:hover
    color: #c8c9cb

.site-header
  .logo
    display: inline-block
    font-size: 22px
    font-weight: 900
  nav
    float: right
    ul
      margin: 0
      padding-left: 0
    li
      display: inline-block
      margin-left: 40px

@media (max-width: 1060px)
  .site-header
    padding-left: 20px
    padding-right: 20px

@media (max-width: 767px)
  .site-header
    height: auto

  .homepage .site-header
    position: absolute
    left: 0
    right: 0

  .site-header
    .logo
      display: block
      text-align: center
    nav
      float: none
      text-align: center
      li
        display: inline-block
        margin-left: 10px
        margin-right: 10px
</style>


