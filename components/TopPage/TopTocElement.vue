<template>
  <div class="toc__content">
    <span class="toc__content--text">
      <span class="toc__content--text--before" />
      {{ content }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TopTocElement extends Vue {
  @Prop({ type: String, required: true }) public readonly content!: string
}
</script>

<style lang="scss" scoped>
.toc {
  &__content {
    text-align: right;

    &--text {
      position: relative;
      font-size: 4vw;
      font-family: adobe-garamond-pro;
      transition-duration: 0.5s;
      cursor: pointer;

        &:hover {
          color: #f7dba4;
        }

        &--before {
          display: inline-block;
          position: absolute;
          top: 50%;
          left: -7vw;
          width: 0;
          height: 0.25vw;
          background: white;
          font-size: 4vw;
          transition-duration: 0.5s;
          opacity: 0;
        }

        &:hover .toc__content--text--before {
          background: #f7dba4;
          width: 5vw;
          opacity: 1;
        }
      }
  }
}
</style>
