export function getCursosShoppingCart(state) {
  return state.cursos
}

export function getMontoTotal(state) {
  return state.montoTotal
}

export function getShoppingCart(state) {
  return {
    cursos: state.cursos,
    total: state.montoTotal
  }
}
