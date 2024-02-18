// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ]
    }
  },
  modules: [
    '@nuxt/content',
	['nuxt-mail', {
      message: {
        to: 'el_odanis321@hotmail.com',
      },
      smtp: {
        host: "mail.cejes.com",
        port: 465,
      },
    }]
  ],


})
