import starlightThemeRapide from 'starlight-theme-rapide';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			site: 'https://eats.munlai.me',
			title: 'easy-api.ts',
			favicon: './public/eats.png',
			logo: {
				src: './public/eats.png'
			},
			social: {
				discord: 'https://discord.com/invite/dKhuDRW8dB',
				github: 'https://github.com/Miduwu/easy-api-docs',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'guides/getting-started' },
						{ label: 'Add-ons', slug: 'guides/addons' },
						{ label: 'Conditional Statements', slug: 'guides/conditional-statements' },
						{ label: 'Custom Databases', slug: 'guides/custom-databases' },
						{ label: 'Custom Functions', slug: 'guides/custom-functions' },
						{ label: 'Escapers', slug: 'guides/escapers' },
						{ label: 'Not Found Handler', slug: 'guides/not-found-handler' },
						{ label: 'Placeholders', slug: 'guides/placeholders' },
						{ label: 'Reverse Reading', slug: 'guides/reverse-reading' },
						{ label: 'Syntax', slug: 'guides/syntax' }
					],
				},
				{
					collapsed: true,
					label: 'Functions',
					autogenerate: {
						directory: "/functions/",
					}
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [starlightThemeRapide()],
		}),
	],
});