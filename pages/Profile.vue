<template>
  <div class="container">
    <article-frame
      page-title="Profile"
      page-sub-title="Hiroki Kobayashi"
    >
      <article-section-back>
        <p>1999年生まれ。DTPデザインが得意です。</p>
      </article-section-back>
    </article-frame>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  ArticleFrame,
  ArticleSectionBack
} from '@/components'

@Component({
  components: {
    ArticleFrame,
    ArticleSectionBack
  }
})
export default class Profile extends Vue {}
</script>

<style lang="scss" scoped>

</style>
