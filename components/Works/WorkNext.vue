<template>
  <div class="work__next--container">
    <div class="work__next--heading">
      次の作品
    </div>
    <work-abstract :work-data="nextWork" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import WorkAbstract from '@/components/Works/WorkAbstract.vue'
import { workDatum } from '@/assets/workData'

@Component({
  components: {
    WorkAbstract
  }
})
export default class WorkNext extends Vue {
  @Prop({ type: Object, required: true }) nextWork!: workDatum
}
</script>

<style lang="scss" scoped>
.work__next {
  &--container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-top: 10%;
  }

  &--heading {
    margin: 5px 0;
  }
}
</style>
