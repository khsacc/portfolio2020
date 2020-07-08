<template>
  <!-- tsx化したいがひとまず保留 -->
  <nuxt-link v-if="to" class="section__container section__container--link" :to="to">
    <slot />
  </nuxt-link>
  <div v-else class="section__container">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ArticleSectionBack extends Vue {
  @Prop({ type: String, required: false }) public to?: string
}
</script>

<style lang="scss" scoped>
.section {
  &__container {
    display: block;
    padding: 4%;
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
