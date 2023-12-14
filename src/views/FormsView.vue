<template>
  <div class="wrapper">
    <h2>Form with submit</h2>
    <form @submit.prevent="sendData">
      <p>
        <label>Model: </label>
        <input type="text" name="model" id="model" v-model="car.model" />
      </p>
      <p>
        <label v-if="!car.model" class="messageError">Model is required</label>
      </p>
      <p>
        <label>Brand: </label>
        <select name="brand" id="brand" v-model="car.brand">
          <option value="Chevrolet">Chevrolet</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Honda">Honda</option>
          <option value="Jeep">Jeep</option>
        </select>
      </p>
      <p>
        <label>Notes: </label>
        <textarea name="notes" id="notes" cols="15" rows="5" v-model="car.notes"></textarea>
      </p>
      <button type="submit">Send</button>
    </form>

    <h2>Form with button action</h2>
    <form>
      <p>
        <label>Model: </label>
        <input type="text" name="model" id="model" v-model="car.model" />
      </p>
      <p>
        <label v-if="!car.model" class="messageError">Model is required</label>
      </p>
      <p>
        <label>Brand: </label>
        <select name="brand" id="brand" v-model="car.brand">
          <option value="Chevrolet">Chevrolet</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Honda">Honda</option>
          <option value="Jeep">Jeep</option>
        </select>
      </p>
      <p>
        <label>Notes: </label>
        <textarea name="notes" id="notes" cols="15" rows="5" v-model="car.notes"></textarea>
      </p>
      <button type="button" @click="sendData">Send</button>
    </form>
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
