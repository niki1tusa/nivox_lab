import { animateVariants } from '@/components/motion-primitive/animate';

export interface ICodeProps {
	code: string;
	animate?: keyof typeof animateVariants;
}
