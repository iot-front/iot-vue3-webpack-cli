import { createStore } from 'vuex'
import { setLanguage } from '@/assets/js/cookies'
import { getLocale } from '@/locales'
import user from './modules/user/index'

export default createStore({
  state: {
    language: getLocale()
  },
  mutations: {
    updateLanguage(state: any, language: string) {
      state.language = language
      setLanguage(state.language)
    }
  },
  actions: {},
  modules: {
    user
  }
})
