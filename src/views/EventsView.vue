<template>
  <div class="row">
    <div class="col s12">
      <p>Count: {{ count }}</p>
      <p>
        <a class="waves-effect waves-light btn" @click="fnCount">Count</a>
      </p>
      <a class="waves-effect waves-light btn" @click.once="fnLog">Click me </a>

      <label @copy="fnCopy">Ingrese su nombre: </label>
      <div class="input-field col s6">
        <input
          id="username"
          type="text"
          class="validate"
          v-model="username"
          @keyup.enter="fnEnter"
        />
        <label for="username">User Name:</label>
      </div>
      <a class="waves-effect waves-light btn" @dblclick="fnDbClick($event, 'Hi')"
        >Button with parameters</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      username: ''
    }
  },
  methods: {
    fnCount() {
      this.count++
    },
    fnLog() {
      console.log('Evento dentro de div')
    },
    fnEnter() {
      if (this.username) alert('Hola mundo ' + this.username)
    },
    fnCopy() {
      alert('Texto copiado')
    },
    fnDbClick(event, value) {
      console.log('Value: ' + value)
      console.log('Event: ', event)
    }
  }
}
</script>

<style scoped></style>
