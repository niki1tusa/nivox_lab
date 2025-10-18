import dynamic from 'next/dynamic';

import { BUTTON_CODE, BUTTON_DATA } from '@/components/ui/button/button.data';
import { IButtonProps } from '@/components/ui/button/button.types';
import { INPUT_TEXT_CODE, INPUT_TEXT_DATA } from '@/components/ui/input/text-input.data';
import { ITextInputProps } from '@/components/ui/input/text-input.types';

import { defineUiItem } from './helper';

export const REGISTRY = {
	button: defineUiItem<IButtonProps>({
		component: dynamic(() => import('@/components/ui/button/Button')),
		code: BUTTON_CODE,
		defaultProps: {
			color: 'blue',
			animate: 'fadeIn',
			children: 'Nivox UI',
		},
		description: 'the button component with customizable animations',
		howToUse: "<Button color='blue' animate='fadeIn'>hello world</Button>",
		details: BUTTON_DATA,
	}),
	textInput: defineUiItem<ITextInputProps>({
		component: dynamic(() => import('@/components/ui/input/TextInput')),
		defaultProps: { label: 'text' },
		code: INPUT_TEXT_CODE,
		details: INPUT_TEXT_DATA,
		howToUse: '<TextInput label={Enter your name...}/>',
		description: 'the input focus in text enter',
	}),
};

export type TComponentsName = keyof typeof REGISTRY;
