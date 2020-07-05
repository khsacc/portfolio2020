<template>
  <section-with-dark-background title="Welcome" class="profile__container">
    <!-- <h2 class="profile__subtitle">
      Introduction
    </h2>
    <div class="profile__detail">
      <p>
        1999 年生まれ。高校時代にグラフィックデザインを始め、特にDTPデザインを得意としています。
      </p>
      <p>
        大学時代は学園祭委員として、パンフレットやグッズ・ウェブサイトなどのデザインやディレクションに携わってきました。また、来場者対応系の部署の経験もあり、案内サインを中心とした空間設計にも関心があります。<br>
      </p>
      <p>
        ひとりのデザイナーとしては、文字組版が第一印象に与える影響や、情報伝達における非言語要素の役割などを大切にしています。
      </p>
      <p>
        「わくわくさせるクリエイティブ」を合言葉に、手に取ってくださるあなたのためのデザインをお届けします。
      </p>
    </div>

    <h2 class="profile__subtitle">
      Skills
    </h2>
    <div class="profile__detail">
      <p>
        <span class="profile__detail--skillKind">DTP</span>
        <span>Adobe InDesign / Adobe Illustrator / Adobe Photoshop / Extendscript</span>
      </p>
      <p>
        <span class="profile__detail--skillKind">Web Design</span>
        <span>Adobe XD / Adobe Illustrator</span>
      </p>
      <p>
        <span class="profile__detail--skillKind">Web Frontend Development</span>
        <span>Vue (Typescript Supported) / Nuxt Typescript</span>
      </p>
      <p>
        <span class="profile__detail--skillKind">Others</span>
        <span>Google Apps Script (Typescript Supported)</span>
      </p>
    </div> -->
  </section-with-dark-background>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SectionWithDarkBackground from './SectionWithDarkBackground.vue'

@Component({
  components: {
    SectionWithDarkBackground
  }
})
export default class TopProfile extends Vue {}
</script>

<style lang="scss" scoped>
.profile {
  &__subtitle {
    font-family: adobe-garamond-pro;
    font-weight: normal;
    font-size: 25px;
    margin: 4% 0 0 0 ;
  }
  &__detail {
    margin: 2% 0;
    line-height: 2em;

    &> p {
      margin: 0 0 3% 0;
    }

    &--skillKind {
      display: block;
      font-weight: 700;
    }
  }
}
</style>
