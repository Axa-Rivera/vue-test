<template>
  <div class="wrapper">
    <p>Count: {{ count }}</p>
    <p>
      <button type="button" v-on:click="fnCount">Count</button>
    </p>
    <button>
      <label @click.once="fnLog">Click me</label>
    </button>
    <p>
        <label @copy="fnCopy">Ingrese su nombre: </label>
        <input type="text" @keyup.enter="fnEnter" v-model="username">
    </p>
    <button type="button" @dblclick="fnDbClick($event, 'Hi')">Button with parameters</button>
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
    fnEnter(){
        if(this.username)
            alert("Hola mundo " + this.username);
    },
    fnCopy(){
        alert("Texto copiado");
    },
    fnDbClick(event, value){
        console.log("Value: " + value);
        console.log("Event: ", event);
    }
  }
}
</script>

<style scoped></style>
