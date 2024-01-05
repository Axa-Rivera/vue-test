<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row">
    <p>Cuenta: {{ count }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>
<style></style>
