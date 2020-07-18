<template>
  <!-- 将来的にtsx化したい -->
  <nuxt-link
    v-if="searchable"
    :to="`/Works/search?category=${category}`"
    :class="`work__category__element ${darkBack ? 'work__category__element--darkBack' : ''}`"
    :style="`margin-${rightAlign ? 'left' : 'right'}: 2%;`"
  >
    {{ category }}
  </nuxt-link>
  <span
    v-else
    :class="`work__category__element ${darkBack ? 'work__category__element--darkBack' : ''}`"
    :style="`margin-${rightAlign ? 'left' : 'right'}: 2%;`"
  >
    {{ category }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class WorkCategory extends Vue {
  @Prop({ type: String, required: true }) public category!: string
  @Prop({ type: Boolean, required: false, default: () => false }) public rightAlign!: boolean
  @Prop({ type: Boolean, required: false, default: () => false }) public darkBack!: boolean
  @Prop({ type: Boolean, required: false, default: () => false }) public searchable!: boolean
}
</script>

<style lang="scss" scoped>
.work__category__element {
    display: inline-block;
    padding: 1.25% 3% 1%;
    margin: 0 0 1% 0;
    color: #f0d3ae;
    background: #201531;

    &--darkBack {
      background: rgba(0,0,0,0);
      border: 1px solid #f0d3ae;
    }
  }
</style>
