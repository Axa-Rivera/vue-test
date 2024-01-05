<template>
  <div class="row">
    <div class="row">
      <div class="col s12">
        <h3>One way binding</h3>
        <div class="col s3">
          <label>{{ message }}</label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <h3>Two way binding</h3>
        <div class="input-field col s3">
          <input type="text" id="last_name" class="validate" v-model="message" />
          <label for="last_name" :class="{ active: message }">Last Name</label>
        </div>
      </div>
    </div>
    <!-- Registro global -->
    <card-component
      v-for="item in [1, 2, 3]"
      :key="item"
      :prop-one="'Property - ' + item"
      @eventOne="emitEventOne"
    />
    <card-component :prop-two="true">
      <template #[slotName]>
        <a class="waves-effect waves-light btn">Slot Test</a>
      </template>
      <p><i class="material-icons">add</i> Agregar</p>
      <p><i class="material-icons">accessible</i> Accessible</p>
    </card-component>
    <!-- Registro Local -->
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from '../components/footer.vue'

export default {
  data() {
    return {
      slotName: 'test',
      message: 'Hola Mundo'
    }
  },
  components: {
    FooterComponent
  },
  methods: {
    emitEventOne(prop) {
      alert('Event emited from ' + prop)
    }
  }
}
</script>

<style scoped></style>
