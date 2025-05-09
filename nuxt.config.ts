// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@sentry/nuxt/module'],

  sentry: {
    sourceMapsUploadOptions: {
      org: 'sentry',
      project: 'sentry-deploy-bug',
      url: 'http://efqsdocker01:9000/'
    }
  },

  sourcemap: {
    client: 'hidden'
  }
})