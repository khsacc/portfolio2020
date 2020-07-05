<template>
  <div>
    <Nuxt class="nuxtpage__container" />
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
  &__container {
    min-height: 100vh;
  }
}

</style>
