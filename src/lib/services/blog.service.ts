import { env } from '$env/dynamic/public';
import type { IData } from '$lib/models/data.model';
import axios from 'axios';

export const getBlogAll = async (): Promise<IData[]> => {
	try {
		const res = await axios.get(`${env.PUBLIC_URL_API}`);

		if (res.status === 200) {
			return res.data;
		} else {
			return [];
		}
	} catch {
		return [];
	}
};

export const getBlogByID = async (id: string): Promise<IData | undefined> => {
	try {
		const blogs = await getBlogAll();

		return blogs.find((b) => b.id === id);
	} catch {
		return undefined;
	}
};
