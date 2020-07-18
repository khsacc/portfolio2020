<template>
  <!-- tsx化したいがひとまず保留 -->
  <nuxt-link v-if="to" class="section__container section__container--link" :to="to">
    <div :style="inlineStyle">
      <slot />
    </div>
  </nuxt-link>
  <div v-else class="section__container">
    <div :style="inlineStyle">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ArticleSectionBack extends Vue {
  @Prop({ type: String, required: false }) public to?: string
  @Prop({ type: Number, required: false, default: 800 }) public maxWidth!: number

  public get inlineStyle () {
    return `max-width: ${this.maxWidth}px`
  }
}
</script>

<style lang="scss" scoped>
.section {
  &__container {
    display: block;
    padding: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(4, 1, 26, 0.35);
    color: white;

    &--link {
      border: solid 1px rgba(0,0,0,0);
      transition: border 0.15s ease-in-out;

      &:hover {
        border: solid 1px #c0af78;
      }
    }
  }
}
</style>
