<template>
  <div class="search__example">
    <div class="search__example--title">
      {{ title }}
    </div>
    <nuxt-link
      v-for="category in categoryExample"
      :key="category"
      :to="`/works/search?category=${category}`"
      class="search__example--link"
    >
      #{{ category }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { allCategories } from '@/assets/workData'

@Component
export default class WorkSearchExample extends Vue {
  @Prop({ type: String, required: false, default: () => 'カテゴリ別検索' }) title!: string
  @Prop({ type: String, required: false }) exclude ?: string
  public categoryExample = this.exclude ? allCategories.filter(category => category !== this.exclude) : allCategories
}
</script>

<style lang="scss" scoped>
.search__example {
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
</style>
