<template>
  <div>
    <header-design class="header" :style="showHeader" />
    <img
      class="nuxtpage__background"
      :src="require('@/assets/img/TopPage/TopBackground.png')"
      :style="{objectPosition: `0 ${backgroundObjectPosition}%`}"
    >
    <Nuxt class="nuxtpage__eachpage disappear-on-page-transition" :style="{opacity: displayContent ? '1' : '0'}" />
    <footer-design class="disappear-on-page-transition" :style="{opacity: displayContent ? '1' : '0'}" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { pageData } from '@/assets/pageData'
import {
  HeaderDesign,
  FooterDesign
} from '@/components'

export default Vue.extend({
  components: {
    HeaderDesign,
    FooterDesign
  },
  data: () => ({
    displayContent: true
  }),
  computed: {
    backgroundObjectPosition () {
      const currentPage = pageData.find(page => page.path === this.$route.path)
      return currentPage ? currentPage.objectPosition : 8
    },
    showHeader () {
      return this.$route.path !== '/'
        ? { opacity: '1', top: '0' }
        : { opacity: '0', top: '-20%' }
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

.header {
  position: fixed;
  right: 8%;
  transition: all 1.3s cubic-bezier(.78,-0.34,.21,1.36);
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
    transition: object-position 1.5s cubic-bezier(.84,0,.28,1.01);
    // object-position: 0 8%;

    @include z-index(nuxtpage__background)
  }

  &__eachpage {
    min-height: 100vh;
  }
}

</style>
