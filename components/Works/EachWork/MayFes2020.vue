<template>
  <article-section-back background="rgba(81, 162, 159, 0.2)">
    <article-sub-heading>
      DTP Workshop
    </article-sub-heading>
    <p>
      第93回五月祭では、印刷物担当統括として、3回の担当内ワークショップを行いました。大多数は1回以上学園祭の経験こそあるものの、まだまだ慣れない委員ばかりの担当。まずは「チームでデザインを考えることが楽しい」と思ってもらえるような設計を目指しました。そのうえで、
      <ul>
        <li>チームで共同制作するためには、どのようなコミュニケーションが必要か？</li>
        <li>他者のデザインに対して、自分が手を動かしてフィードバックするとしたら、どのようなことを考えると効果的だろうか？</li>
        <li>制作物の仕様によって、デザインはどんな影響を受けるだろうか？</li>
        <li>どのようなことを考えて、掲載する情報を策定したらよいだろうか？</li>
      </ul>
      という問いを参加者それぞれの中にもってもらえるように、と考えてワークショップを組み立てました。
    </p>
    <p>
      具体的な課題としては、「ポスターを作る」「既存のウェブサイトをビラにアレンジする」「複数人でページを持ち寄って、一つの冊子に仕上げる」といったものをやってもらいました。
    </p>
    <p>
      課題の内容など、詳しくは以下のnoteにまとまっています。ここには書ききれないことも多いので、ぜひお読みください。
    </p>
    <a href="https://note.com/khsacc/n/nba47440c6361" target="_blank" class="MF93__note--link">
      <div class="MF93__note--container">
        <img :src="require('@/assets/img/works/MF93/workshop_note.jpg')" class="MF93__note--eyecatch">
        <div>
          <h3>チームの印刷デザインに対する意識改革を、ワークショップで</h3>
          <div>Hiroki Kobayashi | note</div>
        </div>
      </div>
    </a>
  </article-section-back>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ArticleSectionBack from '@/components/Article/ArticleSectionBack.vue'
import ArticleSubHeading from '@/components/Article/ArticleSubHeading.vue'
import { workDatum, getCategories } from '@/assets/workData'

@Component({
  components: {
    ArticleSectionBack,
    ArticleSubHeading
  }
})
export default class MayFes2020 extends Vue {}
</script>

<style lang="scss" scoped>
.MF93 {
  &__note {
    &--link {
      color: white;
      text-decoration: none;
    }

    &--container {
      display: flex;
      justify-content: center;
      padding: 10px;
      transition: background 0.5s ease-in-out;

      &:hover {
        background: rgba(229, 245, 197, 0.2);
      }
    }

    &--eyecatch {
      height: 150px;
      width: 150px;
      object-fit: cover;
      margin-right: 20px;
    }
  }
}
</style>
