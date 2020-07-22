<template>
  <div v-if="smoothScrollableBrowser">
    <img
      class="nuxtpage__smooth__background"
      :src="require('@/assets/img/pageBackground.png')"
      :style="{objectPosition: `0 ${backgroundObjectPosition}%`}"
    >
  </div>
  <div v-else id="nuxtpage__notsmooth__background--container" class="nuxtpage__notsmooth__background--container">
    <img
      class="nuxtpage__notsmooth__background--image"
      :src="require('@/assets/img/pageBackground.png')"
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Background extends Vue {
  @Prop({ type: Number, required: true, default: () => 8 }) backgroundObjectPosition !: number

  public get smoothScrollableBrowser () {
    // 対応していないブラウザ判定をここに書く
    return false
  }

  public mounted () {
    if (!this.smoothScrollableBrowser) {
      const smoothscroll = require('smoothscroll-polyfill')
      smoothscroll.polyfill()
    }
  }

  public get WindowWidth () {
    return window.innerWidth
  }

  public get ImageHeight () {
    return this.WindowWidth * (11319 / 1536) // 実測値
  }

  public get currentPath () {
    return this.$route.path
  }

  @Watch('currentPath')
  onPageTransitioin () {
    const scrollAmount = this.ImageHeight * (this.backgroundObjectPosition / 100)
    const imageContainer = document.getElementById('nuxtpage__notsmooth__background--container')
    if (imageContainer) {
      imageContainer.scrollTo({ top: scrollAmount, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.nuxtpage__smooth {
  &__background {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    transition: object-position 1.65s cubic-bezier(.61,0,.17,1);

    @include z-index(nuxtpage__background)
  }
}
.nuxtpage__notsmooth {
  &__background {
    &--container {
      height: 100vh;
      width: 100vw;
      overflow: scroll;
    }
    &--image {
      width: 100%;
    }
  }
}
</style>
