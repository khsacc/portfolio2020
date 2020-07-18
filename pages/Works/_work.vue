<template>
  <article-frame
    v-if="currentWork"
    :page-title="currentWork.title"
    :page-sub-title="currentWork.subTitle"
    :page-description="currentWork.info"
    :categories="currentCategories"
    :dark-back="true"
  >
    <article-section-back>
      <p v-for="line in currentWork.detail.split('\n')" :key="line">
        {{ line }}
      </p>
    </article-section-back>
    <work-detail-list :items="currentWork.works" />
  </article-frame>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  ArticleFrame,
  ArticleSectionBack,
  WorkDetailList
} from '@/components'
import { workData, getCategories } from '@/assets/workData'

@Component({
  components: {
    ArticleFrame,
    ArticleSectionBack,
    WorkDetailList
  }
})
export default class EachWork extends Vue {
  public pagePath: string = ''
  public created () {
    this.pagePath = this.$route.path
  }

  public get currentWork () {
    return workData.find(work => work.to === this.pagePath)
  }

  public get currentCategories () {
    if (this.currentWork) {
      return getCategories(this.currentWork.works)
    }
  }
}
</script>
