// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/scss/main.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  experimental: {
    inlineSSRStyles: true
  },
  vite: {
    build: { cssCodeSplit: false },
    // Pre-bundle Font Awesome so the dev server doesn't reload the page on first visit
    optimizeDeps: {
      include: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/vue-fontawesome',
      ],
    },
  },
  googleFonts: {
    display: 'swap',
    families: {
      Tiny5: true,
      Kanit: {
        wght: [100, 200, 300, 400, 700],
        ital: [100, 200, 300, 400, 700]
      },
    },
    download: true,
    inject: true,
    preconnect: true
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
         ? { preset: ['default', { discardComments: { removeAll: true } }] }
            : false, // disable cssnano when not in production
     },
  }
})
