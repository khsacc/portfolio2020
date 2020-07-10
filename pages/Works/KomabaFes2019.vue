<template>
  <article-frame
    :work-page-path="$route.path"
    :dark-back="true"
  >
    <div>
      <p>
        広報局長として各種デザインの統括を務めた学園祭です。広報局の所管する制作物は幅広く、パンフレットやウェブサイトから、映像、グッズなどにわたります。また、SNSを中心とした広報戦略を計画したり、案内所の設置と案内サインシステムの構築に代表されるような「来場者対応の文脈での空間設計」を行ったりする部署も所管します。
      </p>
      <p>
        私たちの学園祭のアウトプットにおいて中心となるのが「テーマ」と呼ばれる短いキャッチコピーと、「ボディーコピー」と呼ばれる、テーマに付随する詩です。第70回駒場祭では、数人の委員との共同制作という形で、およそ2か月をかけてテーマ・ロゴ・ボディコピーの制作を行いました。ロゴの確定後、統一して用いるカラーパレット、ロゴの展開やデザインに関する指針、書体の指定などを私が行い、委員会内に配布しました。
      </p>
      <p>
        広報局長は、ディレクターとしての役割も担います。日々上がってくるデザイン案に対してフィードバックを行い、ときには建設的な代案を示すこと、入稿において責任を持つことなどが挙げられます。私自身、経験の浅かったWebの分野について、デザイン・実装の両面から成長することができた学園祭でした。
      </p>
      <p>
        以下にご紹介するのは、私自身がデザインした制作物の一部です。私自身のデザインも、テーマを考えた委員・フィードバックをくれた委員と一緒につくった世界観の一部にすぎませんが、その中でも私らしいものを選んでお見せします。このほかにも、<a target="_blank" href="https://www.komabasai.net/70/visitor/">公式ウェブサイト</a>が公開されています。ウェブサイトそのものもさることながら、公式グッズやパンフレットのデザインを見ることも可能です。どれも私はデザインの統括という形でアドバイスをする役回りではありましたが、仲間たちと議論しながら、試行錯誤の中で制作した作品には変わりありません。併せてお楽しみいただければ幸いです。
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
