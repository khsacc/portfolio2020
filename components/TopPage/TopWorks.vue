<template>
  <section-with-dark-background title="Works" class="works__container">
    aa
  </section-with-dark-background>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SectionWithDarkBackground from './SectionWithDarkBackground.vue'

@Component({
  components: {
    SectionWithDarkBackground
  }
})
export default class TopWorks extends Vue {}
</script>

<style lang="scss" scoped>
.works {
}
</style>
