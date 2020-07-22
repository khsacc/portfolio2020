<template>
  <div class="work__ongoing--container">
    このプロジェクトは現在進行中です
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class WorkOnGoing extends Vue {
}
</script>

<style lang="scss" scoped>
.work__ongoing {
  &--container {
    width: 100%;
    padding: 10px;
    text-align: center;
    color: #c8faee;
    background: rgba(21, 61, 47, 0.5);
    margin-bottom: 20px;
    font-weight: 400;
  }
}

</style>
