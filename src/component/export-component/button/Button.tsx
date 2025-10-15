'use client';

import clsx from 'clsx';
import { Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { animateVariants } from '../../motion-primitive/animate';
import { colorMap } from '../../motion-primitive/colors';

import { IButtonProps } from './button.types';

export const Button = ({
	type = 'button',
	children,
	style = 'default',
	textSize = '1',
	color = 'neutral',
	animate,
	loading,
	disabled,
}: IButtonProps) => {
	const variant = animate ? animateVariants[animate] : undefined;
	return (
		<AnimatePresence>
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
		</AnimatePresence>
	);
};
