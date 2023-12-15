<template>
  <div class="row">
    <div class="col s6">
      <h2>V-If</h2>
      <label>
        <input type="checkbox" class="filled-in" v-model="checked" id="checkbox-vif" />
        <span>{{ checked ? 'True' : 'False' }}</span>
      </label>
      <div v-if="checked">
        <p>Ahora me puedes ver</p>
        <a class="waves-effect waves-light btn-small">Button If</a>
      </div>
      <p v-else>Yo soy el else</p>
      <label>Value: {{ checked }}</label>
      <p>
        <a class="waves-effect waves-light btn-small" @click="validateChecked">Button Checked</a>
      </p>
    </div>

    <div class="col s6">
      <h2>V-Show</h2>
      <label>
        <input type="checkbox" id="checkbox-vshow" v-model="checkedShow" />
        <span>{{ checkedShow ? 'True' : 'False' }}</span>
      </label>
      <p v-show="checkedShow">Ahora me puedes ver</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      checkedShow: false
    }
  },
  methods: {
    validateChecked() {
      alert(this.checked)
    }
  }
}
</script>
<style lang=""></style>
