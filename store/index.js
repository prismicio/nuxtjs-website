export const state = () => ({
  menu: {}
})

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu
  }
}

export const actions = {
  async fetchMenu({ commit }, $prismic) {
    const menu = (await $prismic.api.getSingle('menu')).data

    commit('SET_MENU', menu)
  }
}
