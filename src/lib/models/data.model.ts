export interface IData {
	id: string;
	title: string;
	details: string;
	url_img: string;
	videos?: ILink[];
	download?: ILink[];
}

export interface ILink {
	url: string;
	name: string;
}
