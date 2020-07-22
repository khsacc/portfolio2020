import { MetaPropertyProperty } from 'vue-meta'

export const ogpMetaConfig:MetaPropertyProperty[] = [
  {
    property: 'og:type',
    content: 'website'
  },
  {
    property: 'og:title',
    content: 'Hiroki Kobayashi Design Portfolio'
  },
  {
    property: 'og: description',
    content: 'Hiroki Kobayashi: DTP and Web design, Frontend Development'
  },
  {
    property: 'og:image',
    content: 'https://khsacc-design.vercel.app/ogp.jpg'
  },
  {
    property: 'og:locale',
    content: 'ja_JP'
  },
  {
    property: 'twitter:card',
    content: 'summary_large_image'
  },
  {
    property: 'twitter:site',
    content: '@khsacc'
  },
  {
    property: 'twitter:creator',
    content: '@khsacc'
  }
]
