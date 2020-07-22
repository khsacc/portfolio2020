<template>
  <div class="whole__container">
    <div class="content__container">
      <div class="content__subcontainer">
        <div class="content__pagetop">
          <div class="content__pagetop--title">
            Hiroki Kobayashi
          </div>
          <div class="content__pagetop--subtitle">
            Designer<br>
          </div>
        </div>
        <top-toc class="content__toc" />
        <div class="content__introduction">
          「わくわくさせるクリエイティブ」が合言葉。<br>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import checkBrowser from '@/assets/script/browser'
import {
  TopToc
} from '@/components'

@Component({
  components: {
    TopToc
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.whole {
  &__container {
    position: relative;
    min-height: 100vh;
  }
}
.background {
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: 0 9%;
  }
}
.content {
  &__container {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 0 8%;
  }

  &__subcontainer {
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__pagetop {
    color: #fcedcf;
    font-family: adobe-garamond-pro;
    text-align: right;
    font-size: 5vw;

    @include responsive(tablet) {
      font-size: 55px;
    }

    &--title {
      // font-size: 5vw;
      margin-top: 10%;

      @include responsive(tablet) {
        margin-top: 25%;
      }

      @include responsive(smartphone) {
        margin-bottom: 10%;
      }
    }

    &--subtitle {
      font-size: 40%;
    }
  }
  &__toc {
    margin: 15vh 0;
  }

  &__introduction {
    text-align: right;
    margin-bottom: 15vh;
    font-family: adobe-garamond-pro, ten-mincho-text;
    font-weight: 300;
  }
}
</style>
