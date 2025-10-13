import { PAGES } from '@/config/pages.config';

export interface INav {
	id: number;
	title: string;
	link: string;
}
export const NAV_DATA: INav[] = [
	{ id: 1, title: 'Blocks', link: PAGES.BLOCKS },
	{ id: 2, title: 'Docs', link: PAGES.DOCS },
	{ id: 3, title: 'Constuctor', link: PAGES.CONSTRUCTOR },
];
