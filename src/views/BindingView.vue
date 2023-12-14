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
          <label for="last_name" :class="{'active': message}">Last Name</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hola Mundo'
    }
  }
}
</script>

<style scoped></style>
