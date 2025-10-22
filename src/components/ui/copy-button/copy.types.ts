import { animateVariants } from '@/components/motion-primitive/animate';
import { colorMap } from '@/components/motion-primitive/colors';

export interface ICopyProps {
	children?: React.ReactNode;
	code?: string;
	color?: keyof typeof colorMap;
	variant: 'outline' | 'neutral'
	animate?: keyof typeof animateVariants
}
