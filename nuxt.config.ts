import { Configuration } from '@nuxt/types'

const nuxtConfig:Configuration = {
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  head: {
    title: 'Hiroki Kobayashi | Nightie Night',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Adobe Fonts Setting
      { rel: 'stylesheet', href: 'https://use.typekit.net/tpq4hel.css' },
      // Google Fonts (Noto Sans Jp) Setting
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap' }
    ]
  },
  css: [
    '@/assets/styles/fonts.scss'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
  ],
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
