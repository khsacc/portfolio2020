<template>
  <div>
    <img
      class="nuxtpage__background"
      :src="require('@/assets/img/TopPage/TopBackground.png')"
      :style="{objectPosition: `0 ${backgroundObjectPosition}%`}"
    >
    <Nuxt class="nuxtpage__eachpage" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  Footer
} from '@/components'

@Component({
  components: {
    Footer
  }
})
export default class Default extends Vue {
  public get backgroundObjectPosition () {
    const pages = [
      {
        path: '/',
        objectPosition: 8
      },
      {
        path: '/Profile',
        objectPosition: 30
      }
    ]
    const currentPage = pages.find(page => page.path === this.$route.path)
    return currentPage ? currentPage.objectPosition : 8
  }
}
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
    transition: object-position 1.5s cubic-bezier(.59,.07,.17,.99);
    // object-position: 0 8%;

    @include z-index(nuxtpage__background)
  }

  &__eachpage {
    min-height: 100vh;
  }
}

</style>
