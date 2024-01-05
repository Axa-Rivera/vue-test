<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <span class="card-title">Card Title</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"
            ><i class="material-icons">add</i></a
          >
        </div>
        <div class="card-content">
          <p>
            I am a very simple card. I am good at containing small bits of information. I am
            convenient because I require little markup to use effectively.
          </p>
          <p>My prop is: {{ propOne }}</p>
          <p>
            <a class="waves-effect waves-light btn" @click="$emit('eventOne', propOne)">button</a>
          </p>
          <p>
            <slot name="testUno"></slot>
          </p>

          <p>
            <slot></slot>
          </p>
          <p>
            <slot name="test"></slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['propOne', 'propTwo'],
  mounted() {
    var message = this.propTwo ? 'Verdadero' : 'Falso'
    console.log(message)
  }
}
</script>
<style scoped></style>
