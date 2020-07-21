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
    <each-work v-if="currentWork.additional" :work-name="$route.params.work" />
  </article-frame>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  ArticleFrame,
  ArticleSectionBack,
  WorkDetailList,
  EachWork
} from '@/components'
import { workData, workDatum, getCategories } from '@/assets/workData'

@Component({
  components: {
    ArticleFrame,
    ArticleSectionBack,
    WorkDetailList,
    EachWork
  }
})
export default class Work extends Vue {
  public get pagePath ():string {
    return this.$route.path ? this.$route.path : ''
  }

  public get currentWork ():workDatum | undefined {
    return workData.find(work => work.to === this.pagePath)
  }

  public get currentCategories ():string[] | void {
    if (this.currentWork) {
      return getCategories(this.currentWork.works)
    }
  }
}
</script>
