import { VNode } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import MayFes2020  from '@/components/Works/EachWork/MayFes2020.vue'

@Component({
  components: {
    MayFes2020
  }
})
export default class EachWork extends Vue {
  @Prop({ type:String, required: false }) workName ?: string

  public render() {
    if (this.workName) {
      const ComponentName = this.workName
      return <ComponentName></ComponentName>
    }
  }
}
