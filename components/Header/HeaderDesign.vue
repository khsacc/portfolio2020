<template>
  <header id="header">
    <nuxt-link class="headertop__link" to="/">
      <div class="headertop__container">
        <span class="headertop__name">
          Hiroki Kobayashi
        </span>
        <br>
        <span>Design Portfolio</span>
      </div>
    </nuxt-link>
    <div class="headernav__container ">
      <nuxt-link v-for="page in pages" :key="page.name" :class="`headernav__link ${$route.path === page.path ? 'headernav__link--current' : ''}`" :to="page.path">
        {{ page.name }}
        <span :class="`headernav__underline ${$route.path === page.path ? 'headernav__underline--current' : ''}`" />
      </nuxt-link>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { pageData } from '@/assets/pageData'

export default class HeaderDesign extends Vue {
  public pages = pageData.filter(page => page.shownTop)
}

</script>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  background: rgb(15, 12, 22);
  padding-right: 10px;

  @include responsive(smartphone) {
      padding-right: 0;
    }
}

.headernav {
  &__container {
    color: white;

    @include responsive(smartphone) {
      display: none;
    }
  }

  &__underline {
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 1px;
    background: #f7e0c3;
    transition: 0.3s ease-in-out;

    &--current {
      width: 100%;
    }
  }

  &__link {
    margin: 0 10px;
    color: white;
    transition: 0.3s ease-in-out;
    position: relative;

    @include responsive(tablet) {
      margin: 0 5px;
    }

    &:hover,
    &--current {
      color: #f7e0c3;

      & .headernav__underline {
        width: 100%;
      }
    }
  }
}

.headertop {
  &__link {
    color: #f0c388;
    min-width: 150px;
  }

  &__container {
    padding: 15px;
    font-family: adobe-garamond-pro;
    text-align: center;
    align-content: flex-end;
    font-size: 15px;

    @include responsive(tablet) {
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
