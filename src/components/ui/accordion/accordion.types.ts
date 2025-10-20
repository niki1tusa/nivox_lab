import { animateVariants } from '@/components/motion-primitive/animate';

export interface IAccordionItem {
	id: number;
	heading: string;
	title: string;
}
export interface IAccordionProps {
	data: IAccordionItem[];
	animate: keyof typeof animateVariants;
}
