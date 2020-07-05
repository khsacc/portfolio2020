<template>
  <footer class="footer__container">
    <div class="footer__name">
      <div class="footer__name--title">
        <!-- "Nightie Night" -->
      </div>
      <div class="footer__name--description">
        Hiroki Kobayashi<br>
        Design Portfolio Website
      </div>
    </div>
    <div>
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
export default class Footer extends Vue {}
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
    padding: 0 5%;
    text-align: right;
    font-family: adobe-garamond-pro;
    font-size: 20px;
    color: #eccb98;

    &--title {
      font-size: 30px;
    }
  }
}
</style>
