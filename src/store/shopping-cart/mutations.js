export const addToCart = (state, producto) => {
  var total = parseFloat(state.montoTotal) + parseFloat(producto.precio)
  state.cursos.push(producto.curso)
  state.montoTotal = total
}

export const removeFromCart = (state, curso) => {
  state.cursos.splice(state.cursos.indexOf(curso), 1)
}
