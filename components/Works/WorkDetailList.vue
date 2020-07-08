<template>
  <div class="workdetaillist__container">
    <div v-for="item in items" :key="item.name" class="workdetaillist__item--container">
      <img :src="item.path" class="workdetaillist__item--image">
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
      max-width: 500px;
      margin: 15px;
    }

    &--image {
      max-width: 100%;
      width: auto;
      height: auto;
    }

    &--info {
      text-align: right;
      width: 100%;
    }
  }
}
</style>
