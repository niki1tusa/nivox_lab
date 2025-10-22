export const BUTTON_DATA = [
	{ prop: 'children', type: 'React.ReactNode', default: '-' },
	{ prop: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'" },
	{ prop: 'style', type: "'default' | 'friendly'", default: "'default'" },
	{ prop: 'textSize', type: "'1' | '2'", default: "'1'" },
	{ prop: 'color', type: 'keyof typeof colorMap', default: "'neutral'" },
	{ prop: 'animate', type: 'keyof typeof animateVariants', default: '-' },
	{ prop: 'loading', type: 'boolean', default: 'false' },
	{ prop: 'disabled', type: 'boolean', default: 'false' },
		{ prop: 'onClick', type: '()=>void', default: '-' },
];
export const BUTTON_CODE = `'use client';

import clsx from 'clsx';
import { Loader2 } from 'lucide-react';
import { , motion } from 'motion/react';

import { animateVariants } from '../../motion-primitive/animate';
import { colorMap } from '../../motion-primitive/colors';

import { ButtonProps } from './button.types';

export const Button = ({
	type = 'button',
	children,
	style = 'default',
	textSize = '1',
	color = 'neutral',
	animate,
	loading,
	disabled,
}: ButtonProps) => {
	const variant = animate ? animateVariants[animate] : undefined;
	return (
		<>
			<motion.button
				disabled={disabled}
				initial={variant?.initial}
				animate={variant?.animate}
				className={clsx(
					'flex items-center justify-center px-3 py-2 text-base shadow transition-colors hover:shadow-sm',
					style === 'default' ? 'rounded' : 'rounded-2xl',
					textSize === '1' ? 'text-[18px]' : 'text-[24px]',
					colorMap[color]
				)}
				type={type}
			>
				{loading ? <Loader2 color='gray' size={20} /> : children}
			</motion.button>
		</>
	);
};
`;
