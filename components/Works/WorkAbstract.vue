<template>
  <nuxt-link :to="workData.to" class="workabstract__container">
    <div>
      <img class="workabstract__image" :src="workData.image">
    </div>
    <div class="workabstract__title">
      {{ workData.title }}
    </div>
    <div class="workabstract__info">
      {{ workData.info }}
    </div>
    <div>
      <work-category v-for="category in workData.category" :key="category" :category="category" />
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ArticleSectionBack from '@/components/Article/ArticleSectionBack.vue'
import WorkCategory from '@/components/Works/WorkCategory.vue'

@Component({
  components: {
    ArticleSectionBack,
    WorkCategory
  }
})
export default class WorkAbstract extends Vue {
  @Prop({ type: Object, required: true }) public workData!: {to: string, title: string, info: string, category: string[], image: string}
}
</script>

<style lang="scss" scoped>
$contentMargin: 20px;
$contentWidth: 310px;
$contentWidth_smartphone: 280px;

.workabstract {
  &__container {
    margin: auto auto;
    height: 400px;
    padding: $contentMargin;
    display: block;
    transition: all 0.35s ease-in-out;
    color: white;
    width: fit-content;

    &:hover {
      background: rgba(253, 253, 253, 0.04);
    }
  }

  &__image {
    width: $contentWidth;
    display: block;
    margin-bottom: $contentMargin;
  }

  &__title {
    font-weight: 300;
    font-size: 23px;
    letter-spacing: 0.09em;
    font-feature-settings: "palt";
    width: $contentWidth;
  }

  &__info {
    font-size: 14px;
    margin: 0 0 10px 0;
  }
}
</style>
