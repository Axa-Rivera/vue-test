<template>
  <div class="row">
    <div class="col s6">
      <h3>Currency</h3>
      <p>{{ currencyFilter }}</p>
      <div class="input-field col s3">
        <input type="number" id="currency" class="active" v-model="currency" />
        <label for="currency">Currency</label>
      </div>
    </div>
    <div class="col s6">
      <h3>Texto</h3>
      <p>{{ textoUppercase }}</p>
      <div class="input-field col s3">
        <input type="text" id="texto" class="active" v-model="texto" />
        <label for="texto">Texto</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currency: 0,
      texto: 'soy un texto en minusculas'
    }
  },
  computed: {
    currencyFilter() {
      var currencyDecimal = (Math.round(this.currency * 100) / 100).toFixed(2)
      return '$' + currencyDecimal + ' pesos'
    },
    textoUppercase() {
      return this.texto.toUpperCase().replaceAll(' ', '-')
    }
  }
}
</script>
<style scoped></style>
