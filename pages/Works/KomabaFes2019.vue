<template>
  <article-frame
    page-title="第70回駒場祭"
    page-sub-title="「七変華」"
    page-description="2019年・共同制作（広報局長）"
  >
    <div>
      <p>
        広報局長として各種デザインの統括を務めた学園祭です。広報局の所管する制作物は幅広く、パンフレットやウェブサイトから、映像、グッズなどにわたります。また、SNSを中心とした広報戦略を計画したり、案内所の設置と案内サインシステムの構築に代表されるような「来場者対応の文脈での空間設計」を行ったりする部署も所管します。
      </p>
      <p>
        私たちの学園祭のアウトプットにおいて中心となるのが「テーマ」と呼ばれる短いキャッチコピーと、「ボディーコピー」と呼ばれる、テーマに付随する詩です。広報局長としての最初の仕事は、そうしたテーマの世界観を考えることにあります。第70回駒場祭では、数人の委員との共同制作という形で、およそ2か月をかけてテーマ・ロゴ・ボディコピーの制作を行いました。
      </p>
      <p>
        広報局長は、ディレクターとしての役割も担います。初心者の多い委員にAdobe Illustratorなどの制作ソフトウェアの使い方を教えること、日々上がってくるデザイン案に対してフィードバックを行い、ときには建設的な代案を示すこと、入稿において責任を持つことなどがあげられます。
      </p>
      <p>
        以下にご紹介するのは、私自身がデザインした制作物の一部です。私自身のデザインも、テーマを考えた委員・フィードバックをくれた委員と一緒につくった世界観の一部にすぎませんが、その中でも私らしいものを選んでお見せします。
      </p>
      <work-detail-list :items="worksList" />
    </div>
  </article-frame>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  ArticleFrame,
  WorkDetailList
} from '@/components'
import { worksItemDatum } from '@/assets/types/works'

@Component({
  components: {
    ArticleFrame,
    WorkDetailList
  }
})
export default class KomabaFes2019 extends Vue {
  public worksList: worksItemDatum[] = [
    {
      name: 'テーマ発表画像',
      path: require('@/assets/img/works/KF70/abstract.jpg')
    },
    {
      name: '英語版バナー',
      path: require('@/assets/img/works/KF70/banner.jpg')
    },
    {
      name: 'ポスター（A2 paper）',
      path: require('@/assets/img/works/KF70/poster.jpg')
    },
    {
      name: '正門前立看板（900mm*1,800mm）',
      path: require('@/assets/img/works/KF70/board.jpg')
    }
  ]
}

</script>
