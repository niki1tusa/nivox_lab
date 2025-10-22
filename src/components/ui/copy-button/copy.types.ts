import { colorMap } from '@/components/motion-primitive/colors';

export interface ICopyProps {
	children?: React.ReactNode;
	code?: string;
	color?: keyof typeof colorMap;
}
