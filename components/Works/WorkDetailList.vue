<template>
  <div class="workdetaillist__container">
    <div v-for="item in items" :key="item.name" class="workdetaillist__item--container">
      <div class="workdetaillist__item--image--container">
        <img :src="item.path" class="workdetaillist__item--image--content" :style="innerStyle(item)">
        <div class="workdetaillist__item--info">
          <div class="workdetaillist__item--info--name">
            {{ item.name }}
          </div>
          <p v-if="item.comment">
            <span v-for="line in item.comment.split('\n')" :key="line" class="workdetaillist__item--info--comment">
              {{ line }}<br>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import WorkCategory from '@/components/Works/WorkCategory.vue'
import { eachWork } from '@/assets/workData'

@Component({
  components: {
    WorkCategory
  }
})
export default class WorkAbstract extends Vue {
  @Prop({ type: Array, required: true }) public items!: eachWork[]

  public innerStyle (item: eachWork) {
    return item.height ? `max-height: ${item.height}px` : ''
  }
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
      max-width: 900px;
      width: 85%;
      margin: 15px;

      @include responsive(smartphone) {
        width: 100%;
      }
    }

    &--image {
      &--container {
        // height: 450px;
        width: 100%;
        padding: 20px 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: rgba(73, 82, 105, 0.381);
      }
      &--content {
        max-width: 100%;
        width: auto;
        max-height: 420px;
      }
    }

    &--info {
      width: 100%;
      margin-top: 5px;

      &--name {
        font-weight: bold;
        text-align: center;
      }
    }
  }
}
</style>
