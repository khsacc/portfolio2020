<template>
  <article-frame
    :work-page-path="$route.path"
    :dark-back="true"
  >
    <div>
      <p>
        私の所属した部署の職掌は、パンフレットやウェブサイトから、映像、グッズ、SNSなどの広報戦略、案内所の設置と案内サインシステムの構築を中心とした空間設計まで、多岐にわたります。
      </p>
      <p>
        私たちの学園祭のアウトプットにおいて中心となるのが「テーマ」と呼ばれる短いキャッチコピーと、「ボディーコピー」と呼ばれる、テーマに付随する詩です。第70回駒場祭では、数人の委員との共同制作という形で、およそ2か月をかけてテーマ・ロゴ・ボディコピーの制作を行いました。ロゴの確定後、統一して用いるカラーパレット、ロゴの展開やデザインに関する指針、書体の指定などを私が行い、委員会内に配布しました。「万華鏡を回して模様が変わること」に「学園祭を回って様々なものに出会うこと」を重ねた重層的なテーマを表現するに足るようなデザイン指針にまとめる点に苦労した記憶があります。
      </p>
      <p>
        広報局長は、ディレクターとしての役割も担います。日々上がってくるデザイン案に対してフィードバックを行い、ときには建設的な代案を示すこと、入稿において責任を持つことなどが挙げられます。私自身、経験の浅かったWebの分野について、デザイン・実装の両面から成長することができた学園祭でした。
      </p>
      <p>
        以下では、私自身が制作した制作物をいくつかご紹介します。
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
      name: '正門前立看板（900 mm * 1,800 mm）',
      path: require('@/assets/img/works/KF70/board.jpg')
    },
    {
      name: '公式パンフレット・「ご来場の皆さまへ」ページ',
      path: require('@/assets/img/works/KF70/pam_info.jpg')
    },
    {
      name: '建物案内看板（1,800 mm * 1,800 mm）',
      path: require('@/assets/img/works/KF70/3D_info.jpg')
    }
  ]
}
</script>
