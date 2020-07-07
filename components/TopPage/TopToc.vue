<template>
  <div class="toc__wrapper">
    <div v-for="page in pages" :key="page.name" class="toc__content">
      <nuxt-link class="toc__content--text" :to="page.path">
        <span class="toc__content--text--before" />
        {{ page.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { pageData } from '@/assets/pageData'

@Component
export default class TopToc extends Vue {
  public pages = pageData.filter(page => page.shownTop)
}
</script>

<style lang="scss" scoped>
.toc {
  &__wrapper {
    width: 100%
  }

  &__content {
    text-align: right;

    &--text {
      position: relative;
      font-size: 50px;
      font-family: adobe-garamond-pro;
      transition-duration: 0.5s;
      color: white;
      cursor: pointer;

      @include responsive(tablet) {
        font-size: 35px;
        margin: 3% 0;
      }

        &:hover {
          color: #f7dba4;
        }

        &--before {
          display: inline-block;
          position: absolute;
          top: 50%;
          left: -7vw;
          width: 0;
          height: 0.25vw;
          background: white;
          font-size: 4vw;
          transition-duration: 0.5s;
          opacity: 0;
        }

        &:hover .toc__content--text--before {
          background: #f7dba4;
          width: 5vw;
          opacity: 1;
        }
      }
  }
}
</style>
