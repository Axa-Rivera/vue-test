<template>
  <div class="row">
    <div class="col s12">
      <h2>Simple Conditional CSS</h2>
      <div :class="{ alert: flag }">Some Text</div>

      <h2>Two Way Conditional CSS</h2>
      <div :class="[hasError ? 'alert' : 'success']">Some Text</div>

      <h2>Object CSS</h2>
      <div :class="classObject">Some Text</div>

      <h2>Styles</h2>
      <div :style="{ fontSize: fontSize + 'px', color: fontColor }">Some Text</div>
      <a class="waves-effect waves-light btn" @click="changeFont">
        {{ flagFont ? 'Change Font' : 'Revert Font' }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      hasError: true,
      fontSize: 15,
      fontColor: 'blue',
      flagFont: true,
      classObject: {
        success: true,
        fontWhite: true
      }
    }
  },
  methods: {
    changeFont() {
      if (this.flagFont) {
        this.fontSize = 25
        this.fontColor = 'blueviolet'
      } else {
        this.fontSize = 15
        this.fontColor = 'blue'
      }
      this.flagFont = !this.flagFont
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;
  min-height: 25px;
}
.alert {
  color: black;
  background-color: red;
}
.success {
  color: black;
  background-color: #7dd595;
}
.fontWhite {
  color: aliceblue;
}
</style>
