import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TYPES = {
  KULTURNY_DIEL_SET: 'KULTURNY_DIEL_SET',
  KULTURNY_DIEL_CLEARED: 'KULTURNY_DIEL_CLEARED',
  LOADING_STATUS_CHANGED: 'LOADING_STATUS_CHANGED'
}

export default new Vuex.Store({
  state: {
    isLoading: true,
    kulturnyDiel: null,
    ziadosti: null,
    parcely: null,
  },

  actions: {
    setKulturnyDiel({commit}, {kulturnyDiel, ziadosti, parcely}) {
      commit(TYPES.KULTURNY_DIEL_SET, {kulturnyDiel, ziadosti, parcely})
    },

    clearKulturnyDiel({commit}) {
      commit(TYPES.KULTURNY_DIEL_CLEARED)
    },

    setLoading({commit}, isLoading) {
      commit(TYPES.LOADING_STATUS_CHANGED, isLoading)
    }
  },

  getters: {
    ziadosti: (state) => state.ziadosti,
    parcely: (state) => state.parcely,
    kulturnyDiel: (state) => state.kulturnyDiel,
    isLoading: (state) => state.isLoading
  },

  mutations: {
    [TYPES.KULTURNY_DIEL_SET](state, {kulturnyDiel, ziadosti, parcely}) {
      state.kulturnyDiel = kulturnyDiel
      state.parcely = parcely
      state.ziadosti = ziadosti
    },

    [TYPES.KULTURNY_DIEL_CLEARED](state) {
      state.kulturnyDiel = null
      state.parcely = null
      state.ziadosti = null
    },

    [TYPES.LOADING_STATUS_CHANGED](state, isLoading) {
      state.isLoading = isLoading
    }
  }
})


