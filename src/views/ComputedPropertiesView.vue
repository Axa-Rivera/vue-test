<template>
  <div class="container">
    <div class="row">
      <div class="col s12">
        <label>Fecha computada1 = {{ randomNumberComputed }}</label>
        <label>Fecha computada2 = {{ randomNumberComputed }}</label>
        <label>Fecha metodo1 = {{ randomNumber() }}</label>
        <label>Fecha metodo2 = {{ randomNumber() }}</label>
        <div class="row">
          <div class="col s12">
            <label>Edad: {{ edadComputed }}</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <a class="waves-effect waves-light btn col s4" @click="getDate">Get date</a>
            &nbsp;
            <a class="waves-effect waves-light btn col s4" @click="changeComputedDate"
              >Change computed date</a
            >
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <a class="waves-effect waves-light btn" @click="getEdad">Get edad</a>
            <a class="waves-effect waves-light btn" @click="changeFechaNacimiento"
              >Change fecha nacimiento</a
            >
          </div>
        </div>
      </div>
    </div>
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
