<template>
  <div>
    <img
      class="nuxtpage__background"
      :src="require('@/assets/img/TopPage/TopBackground.png')"
      :style="{objectPosition: `0 ${backgroundObjectPosition}%`}"
    >
    <Nuxt class="nuxtpage__eachpage disappear-on-page-transition" :style="{opacity: displayContent ? '1' : '0'}" />
    <Footer class="disappear-on-page-transition" :style="{opacity: displayContent ? '1' : '0'}" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { pageData } from '@/assets/pageData'
import {
  Footer
} from '@/components'

export default Vue.extend({
  components: {
    Footer
  },
  data: () => ({
    displayContent: true
  }),
  computed: {
    backgroundObjectPosition () {
      const currentPage = pageData.find(page => page.path === this.$route.path)
      return currentPage ? currentPage.objectPosition : 8
    }
  },
  watch: {
    $route () {
      this.displayContent = false
      setTimeout(() => { this.displayContent = true }, 1500)
    }
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

.disappear-on-page-transition {
  transition: opacity 0.5s
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
    transition: object-position 1.5s cubic-bezier(.59,.07,.17,.99);
    // object-position: 0 8%;

    @include z-index(nuxtpage__background)
  }

  &__eachpage {
    min-height: 100vh;
  }
}

</style>
