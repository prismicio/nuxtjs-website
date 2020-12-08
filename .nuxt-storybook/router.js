import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e478784 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _58348f0e = () => interopDefault(import('../pages/page/_uid.vue' /* webpackChunkName: "pages/page/_uid" */))
const _2e0686cf = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _7e478784,
    name: "prismic-preview"
  }, {
    path: "/page/:uid?",
    component: _58348f0e,
    name: "page-uid"
  }, {
    path: "/",
    component: _2e0686cf,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
