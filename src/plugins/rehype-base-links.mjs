import { visit } from 'unist-util-visit';

/** Prefix root-relative markdown links with Astro `base` (GitHub Pages subpath). */
export function rehypeBaseLinks(base = '') {
	const prefix = base.endsWith('/') ? base.slice(0, -1) : base;

	return (tree) => {
		if (!prefix) return;

		visit(tree, 'element', (node) => {
			if (node.tagName !== 'a') return;

			const href = node.properties?.href;
			if (typeof href !== 'string') return;
			if (!href.startsWith('/') || href.startsWith('//')) return;
			if (href.startsWith(prefix + '/')) return;

			node.properties.href = prefix + href;
		});
	};
}
