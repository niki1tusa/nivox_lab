'use client';

import clsx from 'clsx';
import { Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const colorMap = {
	blue: 'bg-blue-500 hover:bg-blue-500/80 shadow-blue-400 text-white',
	red: 'bg-red-500 hover:bg-red-500/80 shadow-red-400 text-white',
	green: 'bg-green-500 hover:bg-green-500/80 shadow-green-400 text-white',
	neutral: 'bg-white hover:bg-gray-200 shadow-neutral-400',
} as const;

const animateVariants = {
	fadeIn: {
		initial: { opacity: 0, scale: 0.9, y: 8 },
		animate: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 250, damping: 20, mass: 0.8 },
		},
	},
} as const;
interface Props {
	type?: 'button' | 'submit' | 'reset';
	children: React.ReactNode;
	style?: 'default' | 'friendly';
	textSize?: '1' | '2';
	color?: keyof typeof colorMap;
	animate?: keyof typeof animateVariants;
	loading?: boolean;
	disabled?: boolean;
}

export const Button = ({
	type = 'button',
	children,
	style = 'default',
	textSize = '1',
	color = 'neutral',
	animate,
	loading,
	disabled,
}: Props) => {
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
