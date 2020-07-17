<template>
  <article-frame
    page-title="Contact"
  >
    <article-section-back>
      ご連絡は、メール（ k.hiroki1.732[at]gmail.com, [at]を@に置換してください ）までお願いいたします。
    </article-section-back>
  </article-frame>
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
export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>

</style>
