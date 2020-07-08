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
    <slot />
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ArticleFrame extends Vue {
  @Prop({ type: String, required: true }) public pageTitle!: string
  @Prop({ type: String, required: false }) public pageSubTitle ?: string
  @Prop({ type: String, required: false }) public pageDescription ?: string
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
      margin-bottom: 5%;
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
}
</style>
