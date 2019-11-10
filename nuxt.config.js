const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Jason Dukleth | Web Development Portfolio',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Jason Dukleth | Web Development Portfolio'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Jason Dukleth | Web Development Portfolio'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Skills, projects & resume for Jason Dukleth Web Development Portfolio'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://www.dukleth.com/_nuxt/img/160b3be.png'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://www.dukleth.com'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content:
          'Skills, projects & resume for Jason Dukleth Web Development Portfolio'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Jason Dukleth | Web Development Portfolio'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Jason Dukleth Portfolio Logo'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Ubuntu:300,400'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070',
    continuous: true,
    throttle: 0
  },
  /*
   ** Global CSS
   */
  css: [
    {
      src: '~/assets/css/page-transitions.less',
      lang: 'less'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/vue-masonry-css',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-sweetalert2'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#708090',
          anchor: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          gradient1: '#00A0A7',
          gradient2: '#826BB3',
          gradient3: '#E04F85',
          gradient4: '#FB7B45'
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
