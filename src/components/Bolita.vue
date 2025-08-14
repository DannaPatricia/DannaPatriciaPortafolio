<script>
export default {
  props: {
    top: String  
  }
}
</script>

<template>
  <div class="bolita" :style="{ top }"></div>
</template>

<style scoped>
.bolita {
    position: absolute;
    border-radius: 500px;
    opacity: 0.4;
    transition: all ease-in-out;
}
</style>