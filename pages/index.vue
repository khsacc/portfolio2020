<template>
  <div class="whole__container">
    <img class="background__image" :src="require('@/assets/img/TopPage/TopBackground.png')">
    <div class="content__container">
      <section class="content__pagetitle">
        Hiroki Kobayashi<br>design portfolio
      </section>
      <section class="content__toc">
        <top-toc-element v-for="content in topContents" :key="content.name" :content="content.name" />
      </section>
      <section class="content__profile">
        <top-profile />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  TopTocElement,
  TopProfile
} from '@/components'

@Component({
  components: {
    TopTocElement,
    TopProfile
  }
})
export default class Index extends Vue {
  public topContents = [
    { name: 'Profile' },
    { name: 'Works' },
    { name: 'Contact' }
  ]
}
</script>

<style lang="scss" scoped>
.whole {
  &__conotainer {
    position: relative;
    width: 100vw;
  }
}
.background {
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
  }
}
.content {
  &__container {
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 8%;
  }
  &__pagetitle {
    color: #fcedcf;
    font-family: adobe-garamond-pro;
    font-size: 5vw;
    // margin-right: 8%;
    margin-top: 30%;
    text-align: right;
  }
  &__toc {
    margin-top: 3%;
  }
  &__profile {
    margin: 10% 0 0 33%;
  }
}
</style>
