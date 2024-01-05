<template>
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="col s12">
          <p>Fecha computada1 = {{ randomNumberComputed }}</p>
          <p>Fecha computada2 = {{ randomNumberComputed }}</p>
          <p>Fecha metodo1 = {{ randomNumber() }}</p>
          <p>Fecha metodo2 = {{ randomNumber() }}</p>
          <p>Edad: {{ edadComputed }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <a class="waves-effect waves-light btn" @click="getDate">Get date</a>
        </div>
        <div class="col">
          <a class="waves-effect waves-light btn" @click="changeComputedDate"
            >Change computed date</a
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <a class="waves-effect waves-light btn" @click="getEdad">Get edad</a>
        </div>
        <div class="col">
          <a class="waves-effect waves-light btn" @click="changeFechaNacimiento"
            >Change fecha nacimiento</a
          >
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
