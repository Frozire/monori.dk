
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Laravel udvikling og rådgivning ved Nicklas K. Frank',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'IT Konsulent med erfaring fra danmarks største brands. Jeg løser mindre opgaver i frameworks som Laravel og Vue uden de store omkostninger ved bureauer.' },
      { hid: 'title', name: 'title', content: 'Laravel udvikling og rådgivning ved Nicklas K. Frank' }
    ],
    link: []
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-fb-customer-chat.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
