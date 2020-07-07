<template>
  <div class="toc__element__content">
    <nuxt-link class="toc__element__content--text" :to="`/${content}`">
      <span class="toc__element__content--text--before" />
      {{ content }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FooterTocElement extends Vue {
  @Prop({ type: String, required: true }) public readonly content!: string
}
</script>

<style lang="scss" scoped>
</style>
