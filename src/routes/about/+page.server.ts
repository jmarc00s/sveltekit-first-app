import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		title: 'About page',
		description: 'This is an about page data comming from the server file'
	};
};
