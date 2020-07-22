<template>
  <div id="tar" class="testcontainer">
    <a @click="scroll">scroll</a>
    <img
      class="image"
      :src="require('@/assets/img/pageBackground.png')"
    >
    <div id="test1" />
  </div>
</template>

<script>
export default {
  methods: {
    scroll () {
      this.$scrollTo('#test1')
    }
  }
}
</script>

<style scoped>
.testcontainer {
  height: 100vh;
  width: 100vw;
  /* position: fixed; */
  overflow: scroll;
  position: relative;
}
.image {
  width: 100%;
}
#test1 {
position: absolute;
    top: 150%;
    width: 100%;
    height: 10px;
    background: white;
}
</style>
