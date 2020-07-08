<template>
  <article-frame
    page-title="Works"
    page-description="カードをクリックして詳細をご覧ください"
  >
    <div class="abstract__container">
      <work-abstract v-for="work in worksData" :key="work.title" :work-data="work" />
    </div>
  </article-frame>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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
  public worksData = [
    {
      to: '/Works/KomabaFes2019',
      title: '第70回駒場祭「七変華」',
      info: '2019年・共同制作',
      category: ['Design Direction', 'DTP', 'Illustration', 'Web', 'Logo', 'Copy Writing'],
      image: require('@/assets/img/works/KF70/abstract.jpg')
    }
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
</style>
