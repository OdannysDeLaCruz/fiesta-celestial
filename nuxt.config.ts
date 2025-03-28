// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
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
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
			],
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: 'anonymous',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
				},
			],
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
	},

	modules: [
		'@nuxt/content',
		[
			'nuxt-mail',
			{
				message: {
					to: "fiestacelestial@cejes.com",
				},
				smtp: {
					host: "mail.cejes.com",
					port: 465,
					auth: {
						user: "_mainaccount@cejes.com",
						pass: "C3ntr0CEJES2025$$",
					},
				},
			},
		],
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
	],

	compatibilityDate: '2025-03-18',
});
