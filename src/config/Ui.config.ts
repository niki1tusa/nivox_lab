import dynamic from 'next/dynamic';

import { ACCORDION_CODE, ACCORDION_DATA } from '@/components/ui/accordion/accordion.data';
import { IAccordionProps } from '@/components/ui/accordion/accordion.types';
import { BUTTON_CODE, BUTTON_DATA } from '@/components/ui/button/button.data';
import { IButtonProps } from '@/components/ui/button/button.types';
import { COPY_CODE, COPY_DATA } from '@/components/ui/copy-button/copy.data';
import { ICopyProps } from '@/components/ui/copy-button/copy.types';
import { INPUT_TEXT_CODE, INPUT_TEXT_DATA } from '@/components/ui/input/text-input.data';
import { ITextInputProps } from '@/components/ui/input/text-input.types';
import { TABS_CODE, TABS_DATA } from '@/components/ui/tabs/tabs.data';
import { ITabsProps } from '@/components/ui/tabs/tabs.types';

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
		category: 'base',
		description: 'the button component with customizable animations',
		howToUse: "<Button color='blue' animate='fadeIn'>hello world</Button>",
		details: BUTTON_DATA,
	}),
	textInput: defineUiItem<ITextInputProps>({
		component: dynamic(() => import('@/components/ui/input/TextInput')),
		defaultProps: {
			label: 'Text',
		},
		category: 'base',
		code: INPUT_TEXT_CODE,
		details: INPUT_TEXT_DATA,
		howToUse: `<TextInput label='Name' placeholder='Enter name...'/>`,
		description: 'the input focus in text enter',
	}),
	accordion: defineUiItem<IAccordionProps>({
		component: dynamic(() => import('@/components/ui/accordion/Accordion')),
		defaultProps: {
			data: [
				{ id: 1, heading: 'About', title: 'We are sure developer company' },
				{ id: 2, heading: 'Contact', title: '+7 999 888 66-77' },
			],
			animate: 'fadeIn',
		},
		description: 'it is complex component',
		category: 'complex',
		howToUse: `<Axccordion data={[
				{ id: 1, heading: 'About', title: 'We are sure developer company' },
				{ id: 2, heading: 'Contact', title: '+7 999 888 66-77' }
				 ]}/>`,
		code: ACCORDION_CODE,
		details: ACCORDION_DATA,
	}),
	copy: defineUiItem<ICopyProps>({
		component: dynamic(() => import('@/components/ui/copy-button/CopyButton')),
		defaultProps: {
			children: 'This copy button!',
			variant: 'neutral'
		},
		description: 'it is copy button',
		category: 'base',
		howToUse: `<CopyButton color="neutral">It is copy button!</CopyButton>`,
		code: COPY_CODE,
		details: COPY_DATA,
	}),
	tabs: defineUiItem<ITabsProps>({
		component: dynamic(() => import('@/components/ui/tabs/Tabs')),
		defaultProps: {
			items: ['first', 'second'],
			value: 'first',
		},
		description: 'it is tabs',
		howToUse: `<Tabs items={['mail', 'phone']} />`,
		category: 'complex',
		code: TABS_CODE,
		details: TABS_DATA,
	}),
};

export type TComponentsName = keyof typeof REGISTRY;
export const complexComponents = Object.entries(REGISTRY)
	.filter(([_, item]) => item.category === 'complex')
	.map(([key]) => key);

export const baseComponents = Object.entries(REGISTRY)
	.filter(([_, item]) => item.category === 'base')
	.map(([key]) => key);
