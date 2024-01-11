import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  cursos: [],
  montoTotal: 0
}

const store = {
  state,
  getters,
  actions,
  mutations
}

export default store
