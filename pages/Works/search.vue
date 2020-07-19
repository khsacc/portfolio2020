<template>
  <article-frame
    page-title="Works Search"
    page-sub-title="カテゴリ別検索"
    :page-description="`「${$route.query.category}」の検索結果`"
  >
    <work-detail-list v-if="searchResults" :items="searchResults" />
  </article-frame>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { categorySearch } from '@/assets/workData'
import {
  ArticleFrame,
  WorkDetailList
} from '@/components'

@Component({
  components: {
    ArticleFrame,
    WorkDetailList
  }
})
export default class Search extends Vue {
  public get searchResults () {
    if (this.$route.query.category) {
      return categorySearch(this.$route)
    }
  }

  public get currentCategory () {
    return this.$route.query.category
  }

  @Watch('currentCategory')
  onChangeCategory () {
    setTimeout(() => scroll(0, 0), 750)
  }
}
</script>
