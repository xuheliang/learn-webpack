<template>
  <div>
    <h2 class="color-red">{{ text }}</h2>
    <button class="play"></button>
    <div class="flex">
      <div class="flex-item"></div>
      <div class="flex-item"></div>
      <div class="flex-item"></div>
    </div>
    11113333
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "Hello,Vue"
    }
  }
}
</script>
<style scoped>
  .color-red {
    color: red
  }
</style>