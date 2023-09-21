import { getBlogByID } from '$lib/services/blog.service';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const data = await getBlogByID(params.blog_id);

	return { blog: data };
};
