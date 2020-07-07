<template>
  <div class="section__container">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ArticleSectionBack extends Vue {}
</script>

<style lang="scss" scoped>
.section {
  &__container {
    padding: 4%;
    background: rgba(4, 1, 26, 0.35);
    color: white;
  }
}
</style>
