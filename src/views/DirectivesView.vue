<template>
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="col s12">
          <h5><strong>Binding</strong></h5>
          <p>Usando interpolacion de texto: {{ rawHTML }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h5 class="margin-top-zero">V-Html</h5>
          <p v-html="rawHTML"></p>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h5 class="margin-top-zero">v-bind:id</h5>
          <p v-bind:id="parrafoId">Este parrafo contiene un id</p>
          <p :id="parrafoDosId">Este parrafo contiene otro id</p>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h5 class="margin-top-zero">v-bind multiple variables</h5>
          <p :id="'p3'" :color="'red'">Este parrafo contiene un id con shorthand</p>
          <a class="waves-effect waves-light btn" :disabled="disableButton" :type="'submit'"
            >Click me!</a
          >
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h5 class="margin-top-zero">v-bind multiple variables with object</h5>
          <p v-bind="labelProperties">Este label contiene un binding con multiples atributos</p>
          <p v-bind="labelProperties">
            Este parrafo tiene las mismas propiedades que el label de arriba
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h5 class="margin-top-zero">V-Bind:Reference</h5>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s2">
          <input id="reference" type="text" class="validate" v-model="linkReference" />
          <label for="reference">Pagina web para referencia:</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <a :href="'https://' + linkReference" target="_blank">{{
            linkReference
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rawHTML: "<span style='color: red'>Este mensaje debe ser rojo</>",
      parrafoId: 'p1',
      parrafoDosId: 'p2',
      disableButton: false,
      linkReference: '',
      labelProperties: {
        name: 'labelOne',
        class: 'myClass'
      }
    }
  }
}
</script>

<style scoped>
.myClass {
  color: rgb(233, 121, 9);
}
</style>
