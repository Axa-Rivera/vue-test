<template>
  <div class="row">
    <div class="row">
      <div class="col s12">
        <h4>BeforeCreate -> Created</h4>
        <h4>BeforeMount -> Mounted</h4>
        <h4>BeforeUpdate -> Updated</h4>
        <h4>BeforeUnmount -> Unmounted</h4>
        <h4>Changes to update data and get Updated pair events</h4>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <label>
          <input type="checkbox" name="changed" id="changed" v-model="checboxOne" />
          <span>Cambios</span>
        </label>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <a class="waves-effect waves-light btn" @click="changeCheckbox">
          <i class="material-icons left">book</i>
          Modify checkbox
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checboxOne: true
    }
  },
  methods: {
    changeCheckbox(){
      this.checboxOne = !this.checboxOne;
    }
  },
  beforeCreate() {
    this.checboxOne = !this.checboxOne
    console.log('BeforeCreate', this)
  },
  created() {
    console.log('Created', this)
  },
  beforeMount() {
    console.log('BeforeMount', this)
  },
  mounted() {
    console.log('Mounted', this)
  },
  beforeUpdate() {
    console.log('BeforeUpdate', this)
  },
  updated() {
    console.log('Updated', this)
  },
  beforeUnmount() {
    console.log('BeforeUnmount', this)
  },
  unmounted() {
    console.log('Unmounted', this)
  }
}
</script>
<style scoped></style>
