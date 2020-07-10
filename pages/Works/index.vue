<template>
  <article-frame
    page-title="Works"
    page-description="カードをクリックして詳細をご覧ください"
  >
    <div class="abstract__container">
      <work-abstract v-for="work in worksData" :key="work.abstractTitle" :work-data="work" />
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
</style>
