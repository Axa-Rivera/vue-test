import { createStore } from 'vuex'
import shoppingCart from './shopping-cart'
import cursos from './cursos'

const store = createStore({
  modules: {
    shoppingCart,
    cursos
  },
  // eslint-disable-next-line no-undef
  strict: process.env.NODE_ENV !== 'production'
})

export default store
