import { apiEndpoint } from "./sm.json";

export default {
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    title: "Nuxt + Prismic",
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      hid: "description",
      name: "description",
      content: "Nuxt + Prismic showcase"
    }],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons"
    }],
    script: [{
      src: "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
    }, {
      src: "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },

  /*
   ** Global CSS
   */
  css: ["vue-essential-slices/src/styles/styles.scss", "@/assets/css/resetr.css", "@/assets/css/common.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/prismicLinks", ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [["@nuxtjs/prismic"], ["nuxt-sm"]],
  prismic: {
    endpoint: apiEndpoint,
    disableGenerator: false,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ["vue-slicezone", "nuxt-sm"]
  },
  generate: {
    fallback: "404.html" // Netlify reads a 404.html, Nuxt will load as an SPA

  },
  storybook: {
    stories: ["~/slices/**/*.stories.js"]
  },
  ignore: ["**/*.stories.js"]
}
