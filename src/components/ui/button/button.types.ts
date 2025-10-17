import { animateVariants } from '@/components/motion-primitive/animate';
import { colorMap } from '@/components/motion-primitive/colors';

export interface IButtonProps {
	type?: 'button' | 'submit' | 'reset';
	children: React.ReactNode;
	style?: 'default' | 'friendly';
	textSize?: '1' | '2';
	color?: keyof typeof colorMap;
	animate?: keyof typeof animateVariants;
	loading?: boolean;
	disabled?: boolean;
}
