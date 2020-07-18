<template>
  <footer class="footer__container">
    <div class="footer__name">
      <div class="footer__name--title">
        <!-- "Nightie Night" -->
      </div>
      <nuxt-link to="/" class="footer__name--description">
        Hiroki Kobayashi<br>
        Design Portfolio
      </nuxt-link>
    </div>
    <div class="footer__toc--container">
      <div v-for="page in pages" :key="page.name" class="toc__element__content">
        <nuxt-link :to="page.path">
          <span class="toc__element__content--text">
            <span class="toc__element__content--text--before" />
            {{ page.name }}
          </span>
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { pageData } from '@/assets/pageData'

@Component
export default class FooterDesign extends Vue {
  public pages = pageData.filter(page => page.shownFooter)
}
</script>

<style lang="scss" scoped>
.footer {
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #100316;
    color: white;
    padding: 5% 8%;
  }

  &__name {
    padding-right: 5%;
    text-align: right;
    font-family: adobe-garamond-pro;
    font-size: 20px;

    // &--title {
    //   font-size: 30px;
    // }

    &--description {
      display: block;
      color: #eccb98;
    }
  }

  &__toc--container {
    width: 90px;
  }
}

.toc__element{
  &__content {
    text-align: left;
    margin: 15px 0;

    &--text {
      position: relative;
      font-size: 20px;
      font-family: adobe-garamond-pro;
      transition-duration: 0.5s;
      color: white;

        &:hover {
          color: #f7dba4;
        }

        &--before {
          display: inline-block;
          // position: absolute;
          bottom: -10%;
          left: 0;
          width: 0;
          height: 1.25px;
          background: white;
          // font-size: 4vw;
          transition-duration: 0.5s;
          opacity: 0;
          vertical-align: middle;
        }

        &:hover .toc__element__content--text--before {
          background: #f7dba4;
          width: 15px;
          opacity: 1;
        }
      }
  }
}
</style>
