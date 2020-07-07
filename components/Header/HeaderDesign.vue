<template>
  <nuxt-link class="header__link" to="/">
    <header class="header__container">
      <span class="header__name">
        Hiroki Kobayashi
      </span>
      <br>
      <span>Design Portfolio Website</span>
    </header>
  </nuxt-link>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class HeaderDesign extends Vue {

}

</script>

<style lang="scss" scoped>
.header {
  &__link {
    color: #f0c388;
    min-width: 150px;
  }

  &__container {
    padding: 2vw;
    background: rgb(15, 12, 22);
    font-family: adobe-garamond-pro;
    text-align: center;
    align-content: flex-end;
    font-size: 1.5vw;

    @include responsive(smartphone) {
      padding: 3vw;
      font-size: 10px;
    }
  }

  // &__text {
  //   margin: 8% 4% 4%
  // }

  &__name {
    font-size: 200%;
  }
}
</style>
