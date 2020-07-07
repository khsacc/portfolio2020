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
    text-decoration: none;
    color: #f0c388;
    width: 250px;
  }

  &__container {
    padding: 8% 0 4%;
    background: rgb(15, 12, 22);
    font-family: adobe-garamond-pro;
    text-align: center;
    align-content: flex-end;
  }

  &__name {
    font-size: 30px;
  }
}
</style>
