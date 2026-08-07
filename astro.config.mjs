// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.mrvauxs.net',
	markdown: {
		remarkPlugins: [
			remarkGfm
		]
	},
	integrations: [
		starlight({
			title: 'Vauxs\' Wiki',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/MrVauxs/vauxs-wiki' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ autogenerate: { directory: 'guides' } },
					],
				},
				{
					label: 'Reference',
					items: [
						{ autogenerate: { directory: 'reference' } }
					],
				},
			],
			logo: {
				src: './src/assets/vauxs-64.gif',
			},
			favicon: './vauxs-16.gif',
			customCss: [
				'./src/styles/custom.css',
				"./src/styles/lightbox.css",
			],
			components: {
				// Enable SPA-style view transitions site-wide.
				Head: './src/components/Head.astro',
				// No top header bar — chrome lives in the sidebar instead.
				PageFrame: './src/components/PageFrame.astro',
				// Sidebar holds title/search/controls + nav with the TOC woven in.
				Sidebar: './src/components/Sidebar.astro',
				// Remove the right-hand "On this page" column (now in the sidebar).
				PageSidebar: './src/components/PageSidebar.astro',
				// Single full-width content column (no reserved right sidebar).
				TwoColumnContent: './src/components/TwoColumnContent.astro',
				// Compact theme toggle button instead of the dropdown.
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
		}),
	],
});
