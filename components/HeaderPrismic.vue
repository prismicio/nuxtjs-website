<template>
  <header class="site-header">
    <nuxt-link to="/" class="logo">Example Site</nuxt-link>
    <nav>
      <ul>
        <li v-for="menuLink in menuLinks" :key="menuLink.id">
          <prismic-link :field="menuLink.link">{{ $prismic.richTextAsPlain(menuLink.label) }}</prismic-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['menuLinks'],
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
    li
      display: inline-block
      margin-left: 40px
</style>


