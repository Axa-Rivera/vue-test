export const addCurso = (state, curso) => {
  state.cursos.push(curso)
}

export const removeCurso = (state, curso) => {
  state.cursos.splice(state.cursos.indexOf(curso), 1)
}
