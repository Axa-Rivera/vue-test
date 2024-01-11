<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row">
    <p>Total: ${{ getMontoTotal }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getMontoTotal'])
  }
}
</script>
<style></style>
