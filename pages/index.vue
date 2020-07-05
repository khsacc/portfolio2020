<template>
  <div class="whole__container">
    <img class="background__image" :src="require('@/assets/img/TopPage/TopBackground.png')">
    <div class="content__container">
      <div>
        <section class="content__pagetop">
          <div class="content__pagetop--title">
            Hiroki Kobayashi
          </div>
          <div class="content__pagetop--subtitle">
            DTP designer<br>
            Design Portfolio Website "Nightie Night"
          </div>
        </section>
        <section class="content__toc">
          <top-toc-element v-for="content in topContents" :key="content.name" :content="content.name" />
        </section>
      </div>
      <!-- <section id="Profile" class="content__profile">
        <top-profile />
      </section> -->
      <!-- <section id="Works" class="content__works">
        <top-works />
      </section> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  TopTocElement,
  TopProfile,
  TopWorks
} from '@/components'

@Component({
  components: {
    TopTocElement,
    TopProfile,
    TopWorks
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
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
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
      font-size: 1.5vw;
    }
  }
  &__toc {
    margin-top: 20%;
  }
  &__profile {
    margin: 10% 0 0 33%;
  }
  &__works {
    margin: 10% 0 0 0;
  }
}
</style>
