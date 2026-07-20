// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeBaseLinks } from './src/plugins/rehype-base-links.mjs';

const base = '/CheezyClash-docs';

// https://astro.build/config
export default defineConfig({
	site: 'https://l0nelynx.github.io',
	base,
	trailingSlash: 'always',
	markdown: {
		rehypePlugins: [[rehypeBaseLinks, base]],
	},
	integrations: [
		starlight({
			title: 'CheezyClash',
			description:
				'User guide for CheezyClash — Mihomo (Clash.Meta) client for Android and desktop.',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true,
			},
			// English at /CheezyClash-docs/… without /en/ prefix; Russian at /ru/…
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				ru: {
					label: 'Русский',
					lang: 'ru',
				},
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/l0nelynx/CheezyClash',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/l0nelynx/CheezyClash-docs/edit/main/',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting started',
					translations: { ru: 'Начало работы' },
					items: [{ label: 'Overview', translations: { ru: 'Обзор' }, slug: 'getting-started/overview' }],
				},
				{
					label: 'Install',
					translations: { ru: 'Установка' },
					items: [
						{ label: 'Windows', slug: 'install/windows' },
						{ label: 'Android', slug: 'install/android' },
						{ label: 'Linux', slug: 'install/linux' },
						{ label: 'macOS', slug: 'install/macos' },
					],
				},
				{
					label: 'Desktop guide',
					translations: { ru: 'Desktop' },
					items: [
						{ label: 'Home & Connect', slug: 'desktop/home' },
						{ label: 'Settings', slug: 'desktop/settings' },
						{ label: 'Logs & Zashboard', slug: 'desktop/logs' },
					],
				},
				{
					label: 'Features',
					translations: { ru: 'Возможности' },
					items: [
						{ label: 'Profiles', translations: { ru: 'Профили' }, slug: 'features/profiles' },
						{ label: 'Proxies', translations: { ru: 'Прокси' }, slug: 'features/proxies' },
						{ label: 'Connection modes', translations: { ru: 'Режимы' }, slug: 'features/connection-modes' },
						{ label: 'Access Control', slug: 'features/access-control' },
						{ label: 'Subscription', translations: { ru: 'Подписка' }, slug: 'features/subscription' },
					],
				},
				{
					label: 'FAQ',
					translations: { ru: 'FAQ' },
					slug: 'faq',
				},
				{
					label: 'Troubleshooting',
					translations: { ru: 'Решение проблем' },
					items: [
						{ label: 'Helper service', translations: { ru: 'Helper' }, slug: 'troubleshooting/helper-service' },
						{ label: 'DNS', translations: { ru: 'DNS' }, slug: 'troubleshooting/dns-leaks' },
					],
				},
			],
		}),
	],
});
