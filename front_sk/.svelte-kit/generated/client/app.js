export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')
];

export const server_loads = [];

export const dictionary = {
		"/(app)": [3,[2]],
		"/(app)/generator": [~4,[2]],
		"/(app)/legal/ca": [5,[2]],
		"/(app)/legal/en": [6,[2]],
		"/(app)/privacy/ca": [7,[2]],
		"/(app)/privacy/en": [8,[2]],
		"/(app)/terms/ca": [9,[2]],
		"/(app)/terms/en": [10,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';