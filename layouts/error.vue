<template>
  <div>
    <div class="container">
      <h1>Page not found</h1>
      <p>Sorry we were unable to find the page you are looking for.</p>
      <p><nuxt-link to="/" style="text-decoration: underline;">Back to home</nuxt-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>
