import { getBlogAll } from '$lib/services/blog.service';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const blogs = await getBlogAll();

	return { blogs };
};
