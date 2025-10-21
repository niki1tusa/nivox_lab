import { PAGES } from '@/config/pages.config';

export interface INavItem {
	id: number;
	title: string;
	link: string;
}
export const NAV_DATA: INavItem[] = [
	{ id: 1, title: 'Blocks', link: PAGES.BLOCKS },
	{ id: 2, title: 'Docs', link: PAGES.DOCS },
	{ id: 3, title: 'Constuctor', link: PAGES.CONSTRUCTOR },
];

export const ON_THIS_PAGE_DATA: string[] = ['Preview', 'How to use', 'Details'];
