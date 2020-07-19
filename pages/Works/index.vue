<template>
  <article-frame
    page-title="Works"
    page-description="カードをクリックして詳細をご覧ください"
  >
    <div class="abstract__container">
      <work-abstract v-for="work in worksData" :key="work.abstractTitle" :work-data="work" />
    </div>
    <div class="portfolio__search">
      <div class="portfolio__search--title">
        カテゴリ別検索
      </div>
      <nuxt-link
        v-for="category in categoryExample"
        :key="category"
        :to="`/works/search?category=${category}`"
        class="portfolio__search--link"
      >
        #{{ category }}
      </nuxt-link>
    </div>
    <div class="portfolio__github">
      <div>
        本サイトのソースコード
      </div>
      <a href="https://github.com/khsacc/portfolio2020" target="_blank">
        <img :src="require('@/assets/img/works/portfolio_github.jpg')" class="portfolio__github--img">
      </a>
    </div>
  </article-frame>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { workData } from '@/assets/workData'
import {
  ArticleFrame,
  WorkAbstract
} from '@/components'

@Component({
  components: {
    ArticleFrame,
    WorkAbstract
  }
})
export default class Works extends Vue {
  public worksData = workData
  public categoryExample = [
    'DTP',
    'Web'
  ]
}
</script>

<style lang="scss" scoped>
.abstract {
  &__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

.portfolio {
  &__search {
    text-align: center;

    &--title {
      margin: 10px 0;
    }

    &--link {
      color: #f0d3ae;
      text-decoration: underline;
      margin-right: 0.3em;
    }
  }

  &__github{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    text-align: center;

    &--img {
      width: 450px;
      margin-top: 10px;
      transition:  0.6s ease-in-out;

      @include responsive(tablet) {
        width: 380px;
      }

      @include responsive(smartphone) {
        width: 100%;
      }

      &:hover {
        transform: scale(1.025, 1.025);
      }
    }
  }
}
</style>
