<template>
  <div class="row">
    <p>Curso Elegido: {{ curso }}</p>
    <p>
      <a class="waves-effect waves-light btn" @click="changeCurso('Scrum Master')">Scrum Master</a>
    </p>
    <p><a class="waves-effect waves-light btn" @click="changeCurso('ITIL')">ITIL</a></p>
    <p>
      <a class="waves-effect waves-light btn" @click="changeCurso('Product Owner')"
        >Product Owner</a
      >
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curso: ''
    }
  },
  watch: {
    curso(newValue, oldValue) {
      console.log('New Value: ', newValue)
      console.log('Old Value: ', oldValue)
    }
  },
  methods: {
    changeCurso(curso) {
      this.curso = curso
    }
  }
}
</script>
<style scoped></style>
