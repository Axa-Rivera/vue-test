<template lang="">
  <div>
    <h2>V-If</h2>
    <label>
      <input type="checkbox" id="checkbox-vif" title="checkBox" v-model="checked" />
      {{ checked ? 'True' : 'False' }}
    </label>
    <div v-if="checked">
      <p>Ahora me puedes ver</p>
      <button type="button">Button If</button>
    </div>
    <p v-else>Yo soy el else</p>
    <label>Value: {{ checked }}</label>
    <p><button type="button" @click="validateChecked">Button Checked</button></p>

    <h2>V-Show</h2>
    <label>
      <input type="checkbox" id="checkbox-vshow" title="checkedShow" v-model="checkedShow" />
      {{ checkedShow ? 'True' : 'False' }}
    </label>
    <p v-show="checkedShow">Ahora me puedes ver</p>
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
