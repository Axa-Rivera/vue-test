<template>
  <div class="container">
    <div class="row">
      <h2>Form with submit</h2>
      <form class="col s12">
        <div class="row flex-row flex-wrap">
          <div class="input-field col s12 m6 l4">
            <input
              id="model"
              type="text"
              class="validate"
              required=""
              aria-required="true"
              v-model="car.model"
            />
            <label for="model">Model</label>
            <span class="helper-text" data-error="Model is required"></span>
          </div>
          <div class="input-field col s12 m6 l4">
            <select v-model="car.brand" id="brand" name="brand" title="brand">
              <option value="" disabled selected>Choose your Brand:</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Honda">Honda</option>
              <option value="Jeep">Jeep</option>
            </select>
            <label>Brand</label>
          </div>
          <div class="input-field col s12 m6 l4 pull-m6">
            <textarea
              id="notes"
              class="materialize-textarea"
              cols="15"
              rows="5"
              v-model="car.notes"
            ></textarea>
            <label for="notes">Notes:</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m6">
            <a class="waves-effect waves-light btn" @click="sendData">Send</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      car: {
        model: '',
        brand: '',
        notes: ''
      }
    }
  },
  mounted() {
    var elements = document.querySelectorAll('select')
    // eslint-disable-next-line no-undef
    M.FormSelect.init(elements)
  },
  methods: {
    sendData() {
      if (!this.car.model) alert('Model is required')
      else console.log('Data to send (POST)', this.car)
    }
  }
}
</script>

<style scoped>
.messageError {
  color: red;
  margin-left: 50px;
}
</style>
