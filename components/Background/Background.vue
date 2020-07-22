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
      :style="{objectPosition: $route.path === '/' ? `0 ${backgroundObjectPosition}%` : 'unset'}"
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Background extends Vue {
  @Prop({ type: Number, required: true, default: () => 8 }) backgroundObjectPosition !: number

  /**
   * この component は、すべてのページに共通する背景画像の表示を制御するためのものです。
   * ページごとに設定された object-position の値が prop として入力されます。
   * Chrome / Firefox では、 object-position プロパティに対する transition が効くので、この prop を親である default.vue 側から変更すれば処理は終了です。
   * 一方、iPhone / iPad の各種ブラウザや Safari においては、上記の transition がうまく機能しません。
   * この問題を解決するため、上記のブラウザにおいては画像を画面と同じ大きさの div でトリミングしたうえで、 overflow: scroll でページごとの表示位置を制御します。
   */

  public get smoothScrollableBrowser () {
    // 対応していないブラウザ判定をここに書く
    return false
  }

  public get WindowWidth () {
    return window.innerWidth
  }

  public get ImageHeight () {
    return this.WindowWidth * (11319 / 1536) // 実測値
  }

  preventScroll (target: HTMLElement) {
    interface HTMLElementEvent<T extends HTMLElement> extends Event {
      target: T;
    }

    const prevention = (event: HTMLElementEvent<HTMLInputElement>) => {
      event.preventDefault()
    }

    // for smartphones and tablets
    target.addEventListener('touchmove', {
      handleEvent: (event: HTMLElementEvent<HTMLInputElement>) => {
        prevention(event)
      }
    }, { passive: false })

    // for PCs
    target.addEventListener('mousewheel', {
      handleEvent: (event: HTMLElementEvent<HTMLInputElement>) => {
        prevention(event)
      }
    }, { passive: false })
  }

  scrollImage () {
    const scrollAmount = this.ImageHeight * (this.backgroundObjectPosition / 100)
    const imageContainer = document.getElementById('nuxtpage__notsmooth__background--container')
    if (imageContainer) {
      imageContainer.scrollTo({ top: scrollAmount, behavior: 'smooth' })
      this.preventScroll(imageContainer)
    }
  }

  public mounted () {
    if (!this.smoothScrollableBrowser) {
      const smoothscroll = require('smoothscroll-polyfill')
      smoothscroll.polyfill()
      this.scrollImage()
    }
  }

  public get currentPath () {
    return this.$route.path
  }

  @Watch('currentPath')
  onPageTransition () {
    this.scrollImage()
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
