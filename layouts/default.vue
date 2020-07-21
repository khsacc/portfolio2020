<template>
  <div>
    <transition name="header__transition">
      <header-design v-if="$route.path !== '/'" v-show="imageLoaded"  class="header" />
    </transition>
    <img
      class="nuxtpage__background"
      :src="require('@/assets/img/pageBackground.png')"
      :style="{objectPosition: `0 ${backgroundObjectPosition}%`}"
      v-on:load="onImageLoaded"
    >
    <transition name="page" @after-enter="onPageTransition">
      <div :key="$route.path" v-show="imageLoaded">
        <Nuxt class="nuxtpage__eachpage" />
        <footer-design />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { pageData } from '@/assets/pageData'
import {
  HeaderDesign,
  FooterDesign
} from '@/components'

@Component({
  components: {
    HeaderDesign,
    FooterDesign
  }
})
export default class DefaultLayout extends Vue {
  public get backgroundObjectPosition () {
    const currentPage = pageData.find(page => page.path === this.$route.path)
    return currentPage ? currentPage.objectPosition : 8
  }

  public onPageTransition () {
    window.scroll(0, 0)
  }

  imageLoaded = false

  public onImageLoaded() {
    this.imageLoaded = true
  }

}
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

.header {
  position: fixed;
  right: 8%;

  @include responsive(smartphone) {
    left: 8%;
  }

  &__transition {
    &-enter-active, &-leave-active {
        transition: all 1.3s cubic-bezier(.78,-0.34,.21,1.36);
    }

    &-enter, &-leave-to {
      transform: translateY(-20%);
      opacity: 0;
    }
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
    transition: object-position 1.65s cubic-bezier(.61,0,.17,1);

    @include z-index(nuxtpage__background)
  }

  &__eachpage {
    min-height: 100vh;
  }
}

// page transition animation settings
.page {
  &-enter-active {
    transition: all 0.5s 1s cubic-bezier(.82,.01,.77,1.01);
  }

  &-enter {
    opacity: 0;
  }

  &-leave-active {
    transition: all 0.5s cubic-bezier(.75,.01,1,.53);
  }

  &-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

</style>
