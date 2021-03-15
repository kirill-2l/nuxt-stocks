import { resolve } from 'path';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-stocks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@plugins/api'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/google-fonts-module#readme
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // styleResources: {
  //   scss: ['@/assets/styles/global/index.scss'],
  // },
  googleFonts: {
    display: 'swap',
    preload: true,
    families: {
      'Open+Sans': [400, 600, 700, 800],
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
        'postcss-flexbugs-fixes': {},
        'postcss-normalize': {},
      },
    },
  },

  alias: {
    '@components': resolve(__dirname, './components'),
    '@plugins': resolve(__dirname, './plugins'),
    '@images': resolve(__dirname, './assets/images'),
    '@styles': resolve(__dirname, './assets/styles'),
    '@static': resolve(__dirname, './static'),
  },

  // Public runtime configuration (https://nuxtjs.org/guide/runtime-config)
  publicRuntimeConfig: {
    // GA_ID: process.env.GA_ID || '',
    // GTM_ID: process.env.GTM_ID || '',
    BASE_URL: process.env.BASE_URL || '',
    API_KEY: process.env.API_KEY,
  },

  // Private runtime configuration (https://nuxtjs.org/guide/runtime-config)
  privateRuntimeConfig: {
    // AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    // DATABASE_URL: process.env.DATABASE_URL,
  },
};
