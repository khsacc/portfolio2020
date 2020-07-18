export type workDatum = {
  to: string,
  abstractTitle: string,
  abstractImage: NodeRequire,
  title: string,
  subTitle: string | null,
  info: string | null,
  categories: string[],
  detail: string,
  works: {
    name: string,
    path: NodeRequire,
    categories: string[],
    comment: string
  }[]
}

export const workData:workDatum[] = [
  {
    to: '/Works/KomabaFes2019',
    abstractTitle: '第70回駒場祭「七変華」',
    abstractImage: require('@/assets/img/works/KF70/abstract.jpg'),
    title: '第70回駒場祭',
    subTitle: '「七変華」',
    info: '2019年・共同制作（広報局長）',
    categories: ['Design Direction', 'DTP Design', 'Illustration', 'Information Sign', 'Web', 'Logo', 'Copy Writing'],
    detail: `私の統括した部署の職掌は、パンフレットやウェブサイトから、映像、グッズ、SNSなどの広報戦略、案内所の設置と案内サインシステムの構築を中心とした空間設計まで、多岐にわたります。
      私たちの学園祭のアウトプットにおいて中心となるのが「テーマ」と呼ばれる短いキャッチコピーと、「ボディーコピー」と呼ばれる、テーマに付随する詩です。第70回駒場祭では、数人の委員との共同制作という形で、およそ2か月をかけてテーマ・ロゴ・ボディコピーの制作を行いました。ロゴの確定後、統一して用いるカラーパレット、ロゴの展開やデザインに関する指針、書体の指定などを私が行い、委員会内に配布しました。「万華鏡を回して模様が変わること」に「学園祭を回って様々なものに出会うこと」を重ねた重層的なテーマを表現するに足るようなデザイン指針にまとめる点に苦労した記憶があります。
      広報局長は、ディレクターとしての役割も担います。日々上がってくるデザイン案に対してフィードバックを行い、ときには建設的な代案を示すこと、入稿において責任を持つことなどが挙げられます。私自身、経験の浅かったWebの分野について、デザイン・実装の両面から成長することができた学園祭でした。
      以下では、私自身が制作した制作物をいくつかご紹介します。`,
    works: [
      {
        name: 'テーマ発表画像',
        path: require('@/assets/img/works/KF70/abstract.jpg'),
        categories: ['Illustration'],
        comment: 'テーマを一般に発表する際に、SNSに投稿した画像です。例年は動画の形式で発表することが多かったですが、ボディコピーの文章をしっかりと読んでいただくため、あえて静止画を選びました。'
      },
      {
        name: '英語版バナー',
        path: require('@/assets/img/works/KF70/banner.jpg'),
        categories: ['Illustration'],
        comment: `大学のウェブサイトに掲載をお願いしたバナーです。英語話者の来場を見込み、英語版も用意しました。
        欧文書体には、幾何学的なロゴと相性がよいFuturaを採用しました。「未来」の意味があるこの書体に、70周年の節目の駒場祭が、過去から未来へつながるものであるようにという思いを込めています。`
      },
      {
        name: 'ポスター（A2 paper）',
        path: require('@/assets/img/works/KF70/poster.jpg'),
        categories: ['DTP', 'Illustration'],
        comment: `学内に掲示したり、学校や学習塾などにお送りしたりしたA2サイズのポスターです。また、テーマ発表のときには間に合わなかった「七変華」の字形調整を行っています（テーマ発表画像と見比べてみてください……！）。「変」のはらいや「華」の縦画を生き生きとさせるように字形を調整したので、それを活かすべくテーマは縦書きで組んでいます。
        ベースカラーを白にするか黒にするか迷いましたが、「学園祭の当日に光が入ってきて、万華鏡の模様が見える」というメッセージを表現すべく、黒を選択しています。これにより、幾何学的なロゴが引き締まって見える点も効果的だったと感じました。`
      },
      {
        name: '正門前立看板（900 mm * 1,800 mm）',
        path: require('@/assets/img/works/KF70/board.jpg'),
        categories: ['Illustration'],
        comment: '当日、来場される方々が真っ先に目にする場所に置かれていた看板です。変則的な形や大きさでしたが、写真を撮られることを見越して「駒場祭の顔」となるようなデザインを目指しました。'
      },
      {
        name: '公式パンフレット・「ご来場の皆さまへ」ページ',
        path: require('@/assets/img/works/KF70/pam_info.jpg'),
        categories: ['DTP'],
        comment: '公式パンフレットの制作に深くかかわることはなかった学園祭でしたが、唯一制作したのがこのページです。テーマの世界観を維持しつつ、情報がスムーズに目に入るよう、文字組と色分けの工夫を施しました。'
      },
      {
        name: '建物案内看板（1,800 mm * 1,800 mm）',
        path: require('@/assets/img/works/KF70/3D_info.jpg'),
        categories: ['Information Sign'],
        comment: '案内の難しさが長年課題であった建物の前に新しく設置した案内看板です。通常の案内物では平面図のみを用いますが、ここではそれを立体風にアレンジし、入口の関係などをわかりやすく示しています。できるだけ看板設置場所と建物の位置関係を正確に表現し、直感的な案内を目指しています。また、目的の建物にたどり着くことができない方も多いため、キャンパスマップを配置して「周辺地図」の役割も持たせています。'
      }
    ]
  },
  {
    to: '/Works/MayFes2020',
    abstractTitle: '第93回五月祭「青ク咲ク」',
    abstractImage: require('@/assets/img/works/KF70/abstract.jpg'),
    title: '第93回五月祭',
    subTitle: '「青ク咲ク」',
    info: '2020年・共同制作',
    categories: ['DTP Direction/Design'],
    detail: '',
    works: [
      {
        name: '',
        path: require('@/assets/img/works/KF70/3D_info.jpg'),
        categories: [''],
        comment: ''
      }
    ]
  },
  {
    to: '/Works/MayFes2019',
    abstractTitle: '第92回五月祭',
    abstractImage: require('@/assets/img/works/KF70/abstract.jpg'),
    title: '第92回五月祭',
    subTitle: '「〈おもしろい〉が交差する」',
    info: '2019年・共同制作',
    categories: ['DTP', 'Information Signs'],
    detail: '',
    works: [
      {
        name: '',
        path: require('@/assets/img/works/KF70/3D_info.jpg'),
        categories: [''],
        comment: ''
      }
    ]
  }
]
