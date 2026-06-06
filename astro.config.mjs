// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Vauxs\' Wiki',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/MrVauxs/vauxs-wiki' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ autogenerate: { directory: 'guides' } },
						// Each item here is one entry in the navigation menu.
						// { label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
			logo: {
				src: './src/assets/vauxs-64.gif',
			},
			favicon: './src/assets/vauxs-16.gif',
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
