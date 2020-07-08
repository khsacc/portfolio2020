<template>
  <span
    class="work__category__element"
    :style="`margin-${rightAlign ? 'right' : 'left'}: 2%; ${darkBack ? 'background' : 'color'}: #f0d3ae; ${darkBack ? 'color' : 'background'}: #201531;`"
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
}
</script>

<style lang="scss" scoped>
.work__category__element {
    display: inline-block;
    padding: 1.25% 3% 1%;
    margin: 0 0 1% 0;
    color: #f0d3ae;

  }
</style>
