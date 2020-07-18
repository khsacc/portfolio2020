<template>
  <article class="article__frame__container">
    <div class="article__frame__title--container">
      <h1 class="article__frame__title">
        {{ pageTitle }}
      </h1>
      <h2 v-if="pageSubTitle" class="article__frame__subtitle">
        {{ pageSubTitle }}
      </h2>
      <div v-if="pageDescription" class="article__frame__description">
        {{ pageDescription }}
      </div>
    </div>
    <div>
      <div v-if="categories" class="article__frame__categories">
        <work-category
          v-for="category in categories"
          :key="category"
          :category="category"
          :right-align="true"
          :dark-back="darkBack"
        />
      </div>
    </div>
    <div class="article__frame__slot">
      <slot />
    </div>
    <div class="article__frame__nav">
      <nuxt-link v-if="backPage" class="article__frame__nav--btn" :to="backPage.to">
        {{ backPage.ja }}へ戻る
      </nuxt-link>
      <!-- <nuxt-link v-if="backPage" class="article__frame__nav--btn" :to="backPage.to">
        {{ backPage.ja }}へ行く
      </nuxt-link> -->
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import WorkCategory from '@/components/Works/WorkCategory.vue'

@Component({
  components: {
    WorkCategory
  }
})
export default class ArticleFrame extends Vue {
  @Prop({ type: String, required: true, default: () => '' }) public pageTitle!: string
  @Prop({ type: String, required: false }) public pageSubTitle ?: string
  @Prop({ type: String, required: false }) public pageDescription ?: string
  @Prop({ type: Array, required: false }) public categories ?: string[]
  @Prop({ type: Boolean, required: false, default: () => false }) public darkBack!: boolean

  public get backPage () {
    const pathTree = this.$route.path.split('/')
    if (pathTree.length >= 3 && pathTree[1] === 'Works') {
      // Worksの下層ページ
      return {
        to: '/Works',
        ja: '一覧ページ'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.article__frame {
  &__container {
    padding: 15% 8% 10%;
    color: white;
  }

  &__title {
  font-weight: normal;

  @include responsive(smartphone) {
    font-size: 42px;
  }

    &--container {
      text-align: right;
      font-family: adobe-garamond-pro, ten-mincho-text;
      // font-weight: 400;
      font-style: normal;
      font-size: 47.5px;

      @include responsive(tablet) {
        font-size: 35px;
      }

      @include responsive(smartphone) {
        margin-top: 10%;
        font-size: 30px;
      }
    }
  }

  &__subtitle {
    text-align: right;
    font-family: adobe-garamond-pro, ten-mincho-text;
    font-size: 75%;
    font-weight: normal;
  }

  &__description {
    font-size: 16px;
  }

  &__categories {
    text-align: right;
    font-size: 14px;
    font-weight: 600;
    margin: 5px 0 5px auto;
    width: 75%;
  }

  &__slot {
    width: 100%;
    margin-top: 7.5%;
  }

  &__nav {
    margin-top: 7.5%;
    display: flex;
    justify-content: center;

    &--btn {
      color: white;
      margin: 1%;
      padding: 1%;
      transition: 0.4s ease-in-out;

      &:hover {
        background: rgba(119, 140, 145, 0.156)
      }
    }
  }
}
</style>
