import { Configuration } from '@nuxt/types'
import { vueScrollToConfig } from './plugins/vue-scrollto'

const nuxtConfig:Configuration = {
  mode: 'universal',
  target: 'server',
  head: {
    title: 'Hiroki Kobayashi Design Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hiroki Kobayashi Design Portfolio' }
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
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/google-analytics', { id: 'UA-173235491-1' }]
  ],
  modules: [
    '@nuxtjs/style-resources',
    ['vue-scrollto/nuxt', vueScrollToConfig]
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
  typescript: {
    typecheck: {
      eslint: true,
      ignoreNotFoundWarnings: true
    }
  }
}

export default nuxtConfig
