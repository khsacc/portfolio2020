<template>
  <div>
    <!-- <nuxt-link to="" onclick="scrollfunc">
      scroll
    </nuxt-link> -->
    <div id="tar" class="testcontainer">
      <img
        class="image"
        :src="require('@/assets/img/pageBackground.png')"
      >
    </div>
    <div id="test1" />
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'

export default {
  mounted () {
    // this.$scrollTo('#test1')
    smoothscroll.polyfill()
    setTimeout(() => {
      document.getElementById('tar').scrollBy({ top: 1000, behavior: 'smooth' })
      console.log('scrolled.')
    }, 5000)
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
