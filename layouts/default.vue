<template>
  <div>
    <img class="nuxtpage__background" :src="require('@/assets/img/TopPage/TopBackground.png')">
    <Nuxt class="nuxtpage__eachpage" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  Footer
} from '@/components'

export default Vue.extend({
  components: {
    Footer
  }
})
</script>

<style lang="scss">
html {
  font-family: 'calluna-sans', 'Noto Sans JP', sans-serif;
  font-size: 15px;
  font-weight: 300;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.nuxtpage {
  &__background {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: 0 8%;

    @include z-index(nuxtpage__background)
  }

  &__eachpage {
    min-height: 100vh;
  }
}

</style>
