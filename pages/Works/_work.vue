<template>
  <article-frame
    v-if="currentWork"
    :page-title="currentWork.title"
    :page-sub-title="currentWork.subTitle"
    :page-description="currentWork.info"
    :categories="currentCategories"
    :dark-back="true"
  >
    <work-on-going v-if="currentWork.onGoing" />
    <article-section-back>
      <p v-for="line in currentWork.detail.split('\n')" :key="line">
        {{ line }}
      </p>
    </article-section-back>
    <work-detail-list :items="currentWork.works" />
    <each-work v-if="currentWork.additional" :work-name="$route.params.work" />
    <work-next v-if="nextWork" :next-work="nextWork" />
  </article-frame>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  ArticleFrame,
  ArticleSectionBack,
  WorkDetailList,
  WorkOnGoing,
  EachWork,
  WorkNext
} from '@/components'
import { workData, workDatum, getCategories } from '@/assets/workData'

@Component({
  components: {
    ArticleFrame,
    ArticleSectionBack,
    WorkDetailList,
    WorkOnGoing,
    EachWork,
    WorkNext
  }
})
export default class Work extends Vue {
  public get pagePath ():string {
    return this.$route.path ? this.$route.path : ''
  }

  public get currentWorkIndex () {
    return workData.findIndex(work => work.to === this.pagePath)
  }

  public get currentWork ():workDatum | undefined {
    return this.currentWorkIndex !== -1 ? workData[this.currentWorkIndex] : undefined
  }

  public get currentCategories ():string[] | void {
    if (this.currentWork) {
      return getCategories(this.currentWork.works)
    }
  }

  public get nextWork () {
    if (this.currentWorkIndex + 1 < workData.length) {
      return workData[this.currentWorkIndex + 1]
    }
  }
}
</script>
