<template>
  <div>
    <header-design class="header" :style="showHeader" />
    <img
      class="nuxtpage__background"
      :src="require('@/assets/img/pageBackground.png')"
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
  font-size: 16px;
  font-weight: 300;
  color: white;

  @include responsive(tablet) {
    font-size: 15px;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

p {
  margin: 0.5em 0;
  line-height: 2.1em;
}

li {
  line-height: 2.1em;
}

a {
  text-decoration: none;
}

a[target=_blank] {
  text-decoration: underline;
  color: #a4d8ee;
}

.disappear-on-page-transition {
  transition: opacity 0.5s
}

.header {
  position: fixed;
  right: 8%;
  transition: all 1.3s cubic-bezier(.78,-0.34,.21,1.36);

  @include responsive(smartphone) {
    left: 8%;
  }
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
    transition: 1.65s cubic-bezier(.61,0,.17,1);
    -webkit-transition: all 1.65s cubic-bezier(.61,0,.17,1);
    will-change: transform;
    // object-position: 0 8%;

    @include z-index(nuxtpage__background)
  }

  &__eachpage {
    min-height: 100vh;
  }
}

</style>
