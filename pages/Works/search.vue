<template>
  <transition name="searchPage">
    <article-frame
      id="SearchTop"
      :key="$route.query.category"
      page-title="Works Search"
      page-sub-title="カテゴリ別検索"
      :page-description="`「${$route.query.category}」の検索結果`"
    >
      <work-detail-list v-if="searchResults" :items="searchResults" />
      <work-search-example title="ほかのカテゴリも探す" :exclude="$route.query.category" />
    </article-frame>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { categorySearch } from '@/assets/workData'
import {
  ArticleFrame,
  WorkDetailList,
  WorkSearchExample
} from '@/components'

@Component({
  components: {
    ArticleFrame,
    WorkDetailList,
    WorkSearchExample
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
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
.searchPage {
  &-enter-active {
    transition: all 0.25s 1s cubic-bezier(.82,.01,.77,1.01);
  }

  &-enter {
    opacity: 0;
  }

  &-leave-active {
    transition: all 0.25s cubic-bezier(.75,.01,1,.53);
  }

  &-leave-to {
    opacity: 0;
  }
}
</style>
