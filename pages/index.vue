<template>
  <div class="whole__container">
    <div class="content__container">
      <div>
        <section class="content__pagetop">
          <div class="content__pagetop--title">
            Hiroki Kobayashi
          </div>
          <div class="content__pagetop--subtitle">
            DTP designer<br>
            Design Portfolio Website
          </div>
        </section>
        <top-toc class="content__toc" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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
    // width: 100vw;
    height: 100vh;
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
    height: 100%;
    padding: 0 8%;
  }

  &__pagetop {
    color: #fcedcf;
    font-family: adobe-garamond-pro;
    text-align: right;

    &--title {
      font-size: 5vw;
      margin-top: 10%;
    }

    &--subtitle {
      font-size: 2vw;
    }
  }
  &__toc {
    margin-top: 15vh;
  }
}
</style>
