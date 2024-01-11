export const addCurso = async ({ commit }, curso) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      commit('addCurso', curso)
      resolve(curso + ' agregado')
    }, 2000)
  })
}

export const removeCurso = ({ commit }, curso) => {
  setTimeout(() => {
    commit('removeCurso', curso)
  }, 500)
}
