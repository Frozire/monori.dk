export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
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
      },
      {
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        name: 'Laravel Konsulent ved Nicklas K. Frank',
        url: 'https://laravelkonsulent.dk'
      },
      {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: 'Laravel rådgivning og udvikling',
        image: '',
        description: 'Erfaren og pålidelig rådgivning - Sikker og professionel udvikling - Løsninger der passer til dine behov',
        brand: 'Nicklas K. Frank',
        offers: {
          '@type': 'Offer',
          url: 'https://laravelkonsulent.dk/#priser',
          priceCurrency: 'DKK',
          price: '899',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition'
        }
      },
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
          name: 'Aller Media A/S'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Corporation',
        name: 'Laravel Konsulent ved Nicklas K. Frank',
        alternateName: 'Monori',
        url: 'https://laravelkonsulent.dk',
        logo: '',
        sameAs: 'https://www.facebook.com/monori.dk'
      },
      {
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
      }
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
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/vue-fb-customer-chat.js',
      ssr: false
    }
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
  modules: [],
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
