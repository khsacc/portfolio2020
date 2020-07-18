<template>
  <nuxt-link :to="workData.to" class="workabstract__container">
    <div>
      <img class="workabstract__image" :src="workData.abstractImage">
    </div>
    <div class="workabstract__title">
      {{ workData.abstractTitle }}
    </div>
    <div class="workabstract__info">
      {{ workData.info }}
    </div>
    <div class="workabstract__categories">
      <work-category v-for="category in workData.categories" :key="category" :category="category" />
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ArticleSectionBack from '@/components/Article/ArticleSectionBack.vue'
import WorkCategory from '@/components/Works/WorkCategory.vue'
import { workDatum } from '@/assets/workData'

@Component({
  components: {
    ArticleSectionBack,
    WorkCategory
  }
})
export default class WorkAbstract extends Vue {
  @Prop({ type: Object, required: true }) public workData!: workDatum
}
</script>

<style lang="scss" scoped>
$contentMargin: 20px;
$contentWidth: 310px;
$contentWidth_smartphone: 280px;
$contentMargin_smartphone: 10px;
$contentWidth_smartphone_se: 220px;

.workabstract {
  &__container {
    margin: auto auto;
    height: 400px;
    padding: $contentMargin;
    display: block;
    transition: all 0.35s ease-in-out;
    color: white;
    width: $contentWidth + 2 * $contentMargin;

    &:hover {
      background: rgba(253, 253, 253, 0.04);
    }

    @include responsive(smartphone) {
      width: $contentWidth_smartphone + 2 * $contentMargin_smartphone;
    }

    @include responsive(smartphone_se) {
      width: $contentWidth_smartphone_se + 2 * $contentMargin_smartphone;
    }
  }

  &__image {
    width: 100%;
    display: block;
    margin-bottom: $contentMargin;

    @include responsive(smartphone) {
      width: 100%;
      margin-bottom: $contentMargin_smartphone;
    }
  }

  &__title {
    font-weight: 300;
    font-size: 23px;
    letter-spacing: 0.09em;
    font-feature-settings: "palt";
    width: $contentWidth;
    width: 100%;
  }

  &__info {
    width: 100%;
    font-size: 14px;
    margin: 0 0 10px 0;
  }

  &__categories {
    width: 100%;
  }
}
</style>
