<template>
  <div class="container">
    <article-frame
      page-title="Profile"
      page-sub-title="Hiroki Kobayashi"
    >
      <article-section-back class="profile">
        <p>1999年生まれ、東京大学3年。特に印刷物のデザインが得意です。</p>
        <h2 class="profile__section">
          制限を料理する
        </h2>
        <p>
          冊子を中心に、リーフレットやビラなどの印刷物から、大型の案内サイン、そしてWebデザインまで幅広く考えてきました。その中で身に付けてきた技術や、それぞれの場面で役に立つ経験もありますが、何よりも「それぞれの媒体には、それぞれの活かし方がある」という考え方が養われたように思います。
        </p>
        <p>
          たとえば、Webは印刷物と対比して「情報量の制限がない」ということばかりが強調されがちですが、グラフィックデザイナーとしては、もっと別の場所に差異を見出すほうが面白いと思っています。すなわち、たとえば「スクロール」という行為の特殊性や、「ページ遷移」や「ページ階層」という概念を、いかに視覚的に活かすのかというとらえ方をしたほうが、クリエイティビティの種としては良質な考え方になるのではないか、と思っているということです。それは、媒体ごとに超えることのできない「制限」と向き合うという営みの繰り返しです。
        </p>
        <p>
          私が比較的な紙のデザインでも同じです。形や大きさはもちろんですが、「リーフレットの折り目をどこにいれるのか」のような問題を、情報策定・ビジュアル・手に取った感覚……と多面的に考えられるところが面白いと感じます。そしてもっと細かいレベルでは、余白の取り方や文字組のパラメータの選択に、その「仕様」を生かすか殺すかという問題が付き纏います。いかにその紙を手に取ってくださる方々に対して、その媒体・仕様の制限を美味しく料理するか（場合によっては、どのような仕様を選択するか）が、デザイナーとして一番時間をかけてじっくり向き合うべきところなのではないか、と思っています。
        </p>
        <h2 class="profile__section">
          <span>素材をいかして</span><span>世界観をつくる</span>
        </h2>
        <p>
          このポートフォリオサイトは、ページが細かく分割されており、トップページをまずご覧になった方は、情報の一覧性がなく読みにくい、と思われるかもしれません。それはもっともなご指摘だと思います。しかし、私は訪問者のみなさんにページ遷移をたくさんしていただくという選択をしました。それは、背景の素材を存分にいかすという考えゆえです。
        </p>
        <p>
          トップページから、みなさんには「宙を降りて」ここに来ていただきました。
        </p>
        <p>
          ページ遷移ごとではなく、スクロールするごとに降りていくようなデザインも検討しました。それでもこの形を採用したのは、そうすることで「ページ遷移をすること」そのものを楽しんでいただけるのではないか、と考えたからです。<br>
          はじめてページ遷移をした際に、おっ、と思っていただければ、そして願わくば「ほかのページも見てみたい」と感じていただければ、この試みは成功だった、ということになろうかと思います。もちろん、ストレスなく情報を見つけていただけるよう、別の場所で可能な工夫を尽くしたつもりです。
        </p>
        <p>
          私の考えるデザインのおもしろさとは、このように、素材をいかした世界観をつくることで、見てくださる方々を引き込むということができるという点にあります。それは、情報の多い紙面や案内サインから、情報の少ないイラストレーションまで同じです。ともすると「装飾」とまとめられてしまう部分かもしれませんが、それは情報伝達において必要な要素である、と考えます。それがグラフィカルにデザインをしてみなさんの前にお見せする、ということの意味ではないでしょうか。
        </p>
        <h2 class="profile__section">
          Skills
        </h2>
        <p class="skills">
          <span>DTP</span><br>
          <ul>
            <li>Adobe InDesign</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
          </ul>
        </p>
        <p class="skills">
          <span>Web Frontend Development</span><br>
          <ul>
            <li>Vue (Nuxt) with Typescript</li>
          </ul>
        </p>
        <p class="skills">
          <span>Others</span><br>
          <ul>
            <li>Google Apps Script with Typescript (clasp)</li>
          </ul>
        </p>
        <h2 class="profile__section">
          今後の展望
        </h2>
        <ul>
          <li>映像制作や、映像を組み込んだWebデザインの可能性を模索したいと考え、勉強中です。</li>
          <li>フロントエンドのフレームワークにはVueを使っていますが、template内での補完が効きにくいことが悩みで、React + tsxも身につけていきたいものです。</li>
        </ul>
      </article-section-back>
    </article-frame>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  ArticleFrame,
  ArticleSectionBack
} from '@/components'

@Component({
  components: {
    ArticleFrame,
    ArticleSectionBack
  }
})
export default class Profile extends Vue {}
</script>

<style lang="scss" scoped>
.h1 {
  font-family: adobe-garamond-pro, ten-mincho-text;
  font-weight: normal;
}
.profile {
  &__section {
    margin-top: 30px;
    font-family: adobe-garamond-pro, ten-mincho-text;
    font-weight: 300;

    &> span {
      display: inline-block;
    }
  }
}

.skills {
  &>span {
    font-weight: bold;
  }

  &>p {
    padding-left: 1.5em;
  }

}
</style>
