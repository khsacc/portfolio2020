<template>
  <div class="toc__content">
    <a class="toc__content--text" :to="`#${content}`">
      <span class="toc__content--text--before" />
      {{ content }}
    </a>
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
.toc {
  &__content {
    text-align: left;
    margin: 15px 0;

    &--text {
      position: relative;
      font-size: 20px;
      font-family: adobe-garamond-pro;
      transition-duration: 0.5s;
      text-decoration: none;
      cursor: pointer;

        &:hover {
          color: #f7dba4;
        }

        &--before {
          display: inline-block;
          // position: absolute;
          // bottom: -10%;
          // left: 0;
          width: 0;
          height: 1.25px;
          background: white;
          // font-size: 4vw;
          transition-duration: 0.5s;
          opacity: 0;
          vertical-align: middle;
        }

        &:hover .toc__content--text--before {
          background: #f7dba4;
          width: 15px;
          opacity: 1;
        }
      }
  }
}
</style>
