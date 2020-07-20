<template>
  <article-frame
    page-title="Works"
    page-description="カードをクリックして詳細をご覧ください"
  >
    <div class="abstract__container">
      <work-abstract v-for="work in workData" :key="work.abstractTitle" :work-data="work" />
    </div>
    <work-search-example />
    <div class="portfolio__github">
      <div class="portfolio__github--title">
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
  WorkAbstract,
  WorkSearchExample
} from '@/components'

@Component({
  components: {
    ArticleFrame,
    WorkAbstract,
    WorkSearchExample
  }
})
export default class Works extends Vue {
  public workData = workData
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
  &__github{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    text-align: center;

    &--title {
      margin-bottom: 10px;
    }

    &--img {
      width: 450px;
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
