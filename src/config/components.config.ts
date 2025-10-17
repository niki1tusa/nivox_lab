import dynamic from 'next/dynamic';

import { IButtonProps } from '@/components/ui/button/button.types';
import { ICodeProps } from '@/components/ui/code/code.types';
import { IInputProps } from '@/components/ui/input/input.types';

import { createComponent } from './helper';

export const COMPONENTS = {
	button: createComponent<IButtonProps>(
		dynamic(() => import('@/components/ui/button/Button')),
		{
			color: 'blue',
			animate: 'fadeIn',
			children: 'Nivox UI',
		}
	),
	// code: createComponent<ICodeProps>(
	// 	dynamic(() => import('@/components/ui/code/Code')),
	// 	{
	// 		animate: 'fadeIn',
	// 		code: '<h1>Hello world!</h1>',
	// 	}
	// ),
	textInput: createComponent<IInputProps>(
		dynamic(() => import('@/components/ui/input/TextInput')),
		{ label: 'text' }
	),
};

export type TComponentsName = keyof typeof COMPONENTS;
