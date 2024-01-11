export const addToCart = ({ commit }, curso) => {
  setTimeout(() => {
    commit('addToCart', curso)
  }, 2000)
}

export const removeFromCart = ({ commit }, curso) => {
  setTimeout(() => {
    commit('removeFromCart', curso)
  }, 2000)
}
