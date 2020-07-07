<template>
  <article class="article__frame__container">
    <div class="article__frame__title--container">
      <h1 class="article__frame__title">
        {{ pageTitle }}
      </h1>
      <h2 v-if="pageSubTitle" class="article__frame__subtitle">
        {{ pageSubTitle }}
      </h2>
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
}
</script>

<style lang="scss" scoped>
.article__frame {
  &__container {
    padding: 15% 8% 0;
    color: white;
  }

  &__title {
    &--container {
      margin-bottom: 5%;
    }

    text-align: right;
    font-family: adobe-garamond-pro;
    font-size: 5vw;
    font-weight: normal;
  }

  &__subtitle {
    text-align: right;
    font-family: adobe-garamond-pro;
    font-size: 2.5vw;
    font-weight: normal;
  }
}
</style>
