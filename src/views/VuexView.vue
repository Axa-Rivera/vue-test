<template>
  <div class="row">
    <div class="col s12">
      <div class="input-field col s6">
        <input id="curso" type="text" v-model="producto.curso" class="validate">
        <label for="curso">Curso</label>
      </div>
      <div class="input-field col s6">
        <input id="precio"  type="number" v-model="producto.precio" class="validate">
        <label for="precio">Precio</label>
      </div>
    </div>
    <div class="col s12">
      <p>
        <a class="waves-effect waves-light btn" @click="fnAddCurso">Agregar Curso</a>
      </p>
      <p>
        <a class="waves-effect waves-light btn red" @click="removeCurso(curso)">Eliminar Curso</a>
      </p>
      <p>
        <ol>
          <li v-for="(curso, index) in getCursos" :key="index">{{ curso }}</li>
        </ol>
      </p>
    </div>
    <TestComponent />
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import TestComponent from '../components/test.vue'

export default {
  data(){
    return{
      producto: {
        curso: '',
        precio: 0
      }
    }
  },
  computed: {
    ...mapGetters(['getCursos'])
  },
  methods: {
    ...mapActions(['removeCurso']),
    ...mapMutations(['addToCart']),
    async fnAddCurso(){
      await this.$store.dispatch('addCurso', this.producto.curso)
      this.addToCart(this.producto)
      this.producto = {
        curso: '',
        precio: 0
      }
    }
  },
  components: {
    TestComponent
  }
}
</script>
<style></style>
