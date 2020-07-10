<template>
  <div class="workdetaillist__container">
    <div v-for="item in items" :key="item.name" class="workdetaillist__item--container">
      <div class="workdetaillist__item--image--container">
        <img :src="item.path" class="workdetaillist__item--image--content">
      </div>
      <div class="workdetaillist__item--info">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { worksItemDatum } from '@/assets/types/works'
import WorkCategory from '@/components/Works/WorkCategory.vue'

@Component({
  components: {
    WorkCategory
  }
})
export default class WorkAbstract extends Vue {
  @Prop({ type: Array, required: true }) public items!: worksItemDatum[]
}
</script>

<style lang="scss" scoped>
.workdetaillist {
  &__container {
    width: 100%;
    margin-top: 25px;
    display: flex;
    // align-items: flex-start;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // flex-wrap: wrap;
  }

  $itemContainerPadding: 10%;

  &__item {
    &--container {
      max-width: 800px;
      width: 80%;
      margin: 15px;

      @include responsive(smartphone) {
        width: 100%;
      }
    }

    &--image {
      &--container {
        height: 450px;
        width: 100%;
        padding: 20px 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(73, 82, 105, 0.381);
        // background: rgba(255, 255, 255, 0.8);
      }
      &--content {
        max-width: 100%;
        width: auto;
        max-height: 100%;
      }
    }

    &--info {
      text-align: center;
      width: 100%;
    }
  }
}
</style>
