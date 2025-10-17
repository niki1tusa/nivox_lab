import dynamic from 'next/dynamic';

import { IButtonProps } from '@/components/ui/button/button.types';
import { ICodeProps } from '@/components/ui/code/code.types';
import { IInputProps } from '@/components/ui/input/input.types';
import { createComponent } from './helper';

export const COMPONENTS = {
	button: {
		component: createComponent<IButtonProps>(dynamic<IButtonProps>(() => import('@/components/ui/button/Button')),
		defaultProps: {
			color: 'blue',
			animate: 'fadeIn',
			children: 'Nivox UI',
		}) 
	},
	code: {
		component: dynamic<ICodeProps>(() => import('@/components/ui/code/Code')),
		defaultProps: {
			animate: 'fadeIn',
			code: '<h1>Hello world!</h1>',
		},
	},
	textInput: {
		component: dynamic<IInputProps>(() => import('@/components/ui/input/TextInput')),
		defaultProps: {
			label: 'text',
		},
	},
}
export type TComponentsName = keyof typeof COMPONENTS;
