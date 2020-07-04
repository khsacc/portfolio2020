<template>
  <div class="section__container">
    <h1 class="section__title">
      {{ title }}
    </h1>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SectionWithDarkBackground extends Vue {
  @Prop({ type: String, required: true }) public readonly title !: string
}
</script>

<style lang="scss" scoped>
.section {
  &__container {
    padding: 4%;
    background: rgba(4, 1, 26, 0.35);
  }
  &__title {
    font-family: adobe-garamond-pro;
    font-weight: normal;
    font-size: 3.5vw;
  }
}
</style>
