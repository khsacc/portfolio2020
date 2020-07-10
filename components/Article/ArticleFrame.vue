<template>
  <article class="article__frame__container">
    <div class="article__frame__title--container">
      <h1 class="article__frame__title">
        {{ displayData.displayTitle }}
      </h1>
      <h2 v-if="displayData.displaySubtitle" class="article__frame__subtitle">
        {{ displayData.displaySubtitle }}
      </h2>
      <div v-if="displayData.displayDescription" class="article__frame__description">
        {{ displayData.displayDescription }}
      </div>
    </div>
    <slot />
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { workData } from '@/assets/workData'

@Component
export default class ArticleFrame extends Vue {
  @Prop({ type: String, required: false }) public pageTitle?: string
  @Prop({ type: String, required: false }) public pageSubTitle ?: string
  @Prop({ type: String, required: false }) public pageDescription ?: string
  @Prop({ type: String, required: false }) public workPagePath ?: string

  public get currentWork () {
    return workData.find(work => work.to === this.workPagePath)
  }

  public get displayData () {
    if (this.workPagePath) {
      if (this.currentWork) {
        return {
          displayTitle: this.currentWork.title,
          displaySubtitle: this.currentWork.subtitle,
          displayDescription: this.currentWork.info
        }
      }
    } else {
      return {
        displayTitle: this.pageTitle,
        displaySubtitle: this.pageSubTitle,
        displayDescription: this.pageDescription
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
