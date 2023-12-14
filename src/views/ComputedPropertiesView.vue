<template>
  <div class="wrapper">
    <label>Fecha computada1 = {{ randomNumberComputed }}</label>
    <label>Fecha computada2 = {{ randomNumberComputed }}</label>
    <label>Fecha metodo1 = {{ randomNumber() }}</label>
    <label>Fecha metodo2 = {{ randomNumber() }}</label>

    <br />
    <label>Edad: {{ edadComputed }}</label>

    <br />
    <button type="button" @click="getDate">Get date</button>
    <button type="button" @click="changeComputedDate">Change computed date</button>

    <br />
    <button type="button" @click="getEdad">Get edad</button>
    <button type="button" @click="changeFechaNacimiento">Change fecha nacimiento</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fechaNacimiento: 1992,
      fechaComputada: Date.now()
    }
  },
  computed: {
    edadComputed() {
      return new Date().getFullYear() - this.fechaNacimiento
    },
    dateComputed() {
      return Date.now()
    },
    dateComputedSetter: {
      get() {
        return this.fechaComputada
      },
      set() {
        this.fechaComputada = Date.now()
      }
    },
    randomNumberComputed() {
      return Math.random()
    }
  },
  methods: {
    dateMethod() {
      return Date.now()
    },
    randomNumber() {
      return Math.random()
    },
    getDate() {
      console.log('Computed: ', this.dateComputed)
      console.log('Computed Setter: ', this.dateComputedSetter)
      console.log('Fecha computada: ', this.fechaComputada)
      console.log('Metodo: ', this.dateMethod())
    },
    changeComputedDate() {
      this.dateComputedSetter = Date.now()
    },
    getEdad() {
      console.log('Edad: ' + this.edadComputed)
    },
    changeFechaNacimiento() {
      this.fechaNacimiento = 2000
    }
  }
}
</script>

<style scoped></style>
