<template>
  <footer class="footer__container">
    <div class="footer__name">
      <div class="footer__name--title">
        <!-- "Nightie Night" -->
      </div>
      <nuxt-link to="/" class="footer__name--description">
        Hiroki Kobayashi<br>
        Design Portfolio Website
      </nuxt-link>
    </div>
    <div class="footer__toc--container">
      <footer-toc-element v-for="page in ['Profile', 'Works', 'Contact']" :key="page" :content="page" />
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FooterTocElement from '@/components/Footer/FooterTocElement.vue'

@Component({
  components: {
    FooterTocElement
  }
})
export default class FooterDesign extends Vue {}
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
      text-decoration: none;
      color: #eccb98;
    }
  }

  &__toc--container {
    width: 90px;
  }
}
</style>
