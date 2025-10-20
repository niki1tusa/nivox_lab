import dynamic from 'next/dynamic';

import { ACCORDION_CODE, ACCORDION_DATA } from '@/components/ui/accordion/accordion.data';
import { IAccordionProps } from '@/components/ui/accordion/accordion.types';
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
		defaultProps: {
			label: 'Text',
		},
		code: INPUT_TEXT_CODE,
		details: INPUT_TEXT_DATA,
		howToUse: `<TextInput label='Enter your name...'/>`,
		description: 'the input focus in text enter',
	}),
	accordion: defineUiItem<IAccordionProps>({
		component: dynamic(() => import('@/components/ui/accordion/Accordion')),
		defaultProps: {
			data: [
				{ id: 1, heading: 'About', title: 'We are sure developer company' },
				{ id: 2, heading: 'Contact', title: '+7 999 888 66-77' },
			],
		},
		description: 'it is complex component',
		howToUse: `<Axccordion data={[
				{ id: 1, heading: 'About', title: 'We are sure developer company' },
				{ id: 2, heading: 'Contact', title: '+7 999 888 66-77' }
				 ]}/>`,
		code: ACCORDION_CODE,
		details: ACCORDION_DATA,
	}),
};

export type TComponentsName = keyof typeof REGISTRY;
export const componentList = Object.keys(REGISTRY);
