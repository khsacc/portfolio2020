<template>
  <h2 class="article-sub-heading">
    <slot />
  </h2>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ArticleSubHeading extends Vue {}
</script>

<style lang="scss" scoped>
.article-sub-heading {
  font-family: adobe-garamond-pro, ten-mincho-text;
  font-weight: 300;
}
</style>
