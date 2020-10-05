export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Laravel udvikling og rådgivning ved Nicklas K. Frank',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Kvalificeret Laravel udvikler med erfaring fra flere af Danmarks største brands. Professionelle Laravel løsninger uden overpriser fra bureauer.'
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Laravel udvikling og rådgivning ved Nicklas K. Frank'
      }
    ],
    script: [
      {
        json: {
          '@context': 'https://schema.org/',
          '@type': 'WebSite',
          name: 'Laravel Konsulent ved Nicklas K. Frank',
          url: 'https://laravelkonsulent.dk'
        },
        type: 'application/ld+json'
      },
      {
        json:
          {
            '@context': 'https://schema.org/',
            '@type': 'Person',
            name: 'Nicklas K. Frank',
            url: 'https://laravelkonsulent.dk/#ommig',
            image: 'https://laravelkonsulent.dk/nicklasfrank.jpg',
            sameAs: [
              'https://linkedin.com/in/nkfrank',
              'https://github.com/Frozire'
            ],
            jobTitle: 'Senior Web Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Laravel Konsulent ved Nicklas K. Frank'
            }
          },
        type: 'application/ld+json'
      },
      {
        json:
          {
            '@context': 'https://schema.org',
            '@type': 'Corporation',
            name: 'Laravel Konsulent ved Nicklas K. Frank',
            alternateName: 'Monori',
            url: 'https://laravelkonsulent.dk',
            logo: '',
            sameAs: 'https://www.facebook.com/monori.dk'
          },
        type: 'application/ld+json'
      },
      {
        json: {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Laravel Konsulent ved Nicklas K. Frank',
          image: 'https://laravelkonsulent.dk/nicklasfrank.jpg',
          url: 'https://laravelkonsulent.dk',
          telephone: '(+45) 53 57 16 13',
          priceRange: '899',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Copenhagen',
            addressCountry: 'DK'
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            opens: '00:00',
            closes: '23:59'
          },
          sameAs: 'https://www.facebook.com/monori.dk'
        },
        type: 'application/ld+json'
      }
    ],
    link: []
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/vue-fb-customer-chat.js',
      ssr: false
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
