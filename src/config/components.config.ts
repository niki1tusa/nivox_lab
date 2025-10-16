import dynamic from 'next/dynamic';

import { IButtonProps } from '@/component/ui/button/button.types';
import { ICodeProps } from '@/component/ui/code/code.types';

export const COMPONENTS = {
	button: {
		component: dynamic<IButtonProps>(() => import('@/component/ui/button/Button')),
		defaultProps: {
			color: 'blue',
			animate: 'fadeIn',
			children: 'Nivox UI',
		},
	},
    	code: {
		component: dynamic<ICodeProps>(() => import('@/component/ui/code/Code')),
		defaultProps: {
			color: 'blue',
			animate: 'fadeIn',
			children: 'Nivox UI',
		},
	},
};
export type TComponentsName = keyof typeof COMPONENTS