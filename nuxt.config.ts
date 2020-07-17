import { Configuration } from '@nuxt/types'

const nuxtConfig:Configuration = {
  mode: 'universal',
  target: 'server',
  head: {
    title: 'Hiroki Kobayashi Design Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Hiroki Kobayashi's Design Portfolio Website" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Google Fonts (Noto Sans Jp) Setting
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap' }
    ],
    script: [
      // Adobe Fonts Setting
      { src: '/adobeFont.js' }
    ]
  },
  css: [
  ],
  plugins: [
    '@/plugins/vue-scrollto'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '@/assets/styles/main.scss'
    ]
  },
  build: {
    html: {
      minify: {
        collapseWhitespace: true
      }
    }
  },
  generate: {
    // nuxt generateでは動的なパラメータを生成することができない
    routes: [
      '/Works/KomabaFes2019'
    ]
  },
  typescript: {
    typecheck: {
      eslint: true,
      ignoreNotFoundWarnings: true
    }
  }
}

export default nuxtConfig
