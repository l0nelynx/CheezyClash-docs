// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://l0nelynx.github.io',
	base: '/CheezyClash-docs',
	integrations: [
		starlight({
			title: 'CheezyClash',
			description:
				'Documentation for CheezyClash — a cross-platform Mihomo (Clash.Meta) client for Android and desktop.',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true,
			},
			defaultLocale: 'en',
			locales: {
				en: { label: 'English' },
				ru: { label: 'Русский', lang: 'ru' },
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
					items: [
						{
							label: 'Overview',
							translations: { ru: 'Обзор' },
							slug: 'getting-started/overview',
						},
					],
				},
				{
					label: 'Install',
					translations: { ru: 'Установка' },
					items: [
						{
							label: 'Windows',
							slug: 'install/windows',
						},
						{
							label: 'Android',
							slug: 'install/android',
						},
						{
							label: 'Linux',
							slug: 'install/linux',
						},
						{
							label: 'macOS',
							slug: 'install/macos',
						},
					],
				},
				{
					label: 'Features',
					translations: { ru: 'Возможности' },
					items: [
						{
							label: 'Profiles',
							translations: { ru: 'Профили' },
							slug: 'features/profiles',
						},
						{
							label: 'Proxies',
							translations: { ru: 'Прокси' },
							slug: 'features/proxies',
						},
						{
							label: 'Connection modes',
							translations: { ru: 'Режимы подключения' },
							slug: 'features/connection-modes',
						},
						{
							label: 'Access Control',
							translations: { ru: 'Контроль доступа' },
							slug: 'features/access-control',
						},
						{
							label: 'Subscription',
							translations: { ru: 'Подписка' },
							slug: 'features/subscription',
						},
						{
							label: 'Traffic',
							translations: { ru: 'Трафик' },
							slug: 'features/traffic',
						},
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
						{
							label: 'Helper service',
							translations: { ru: 'Helper-сервис' },
							slug: 'troubleshooting/helper-service',
						},
						{
							label: 'DNS leaks',
							translations: { ru: 'Утечки DNS' },
							slug: 'troubleshooting/dns-leaks',
						},
					],
				},
				{
					label: 'About',
					translations: { ru: 'О приложении' },
					items: [
						{
							label: 'Architecture',
							translations: { ru: 'Архитектура' },
							slug: 'about/architecture',
						},
						{
							label: 'Privacy',
							translations: { ru: 'Конфиденциальность' },
							slug: 'about/privacy',
						},
					],
				},
			],
		}),
	],
});
