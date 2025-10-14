'use client';

import { Highlight, themes } from 'prism-react-renderer';

import Title from '@/component/Title';
import { Button } from '@/component/export-component/Button';

export default function ClientPage() {
	const code = `'use client';

import clsx from 'clsx';
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
}

export const Button = ({
	type = 'button',
	children,
	style = 'default',
	textSize = '1',
	color = 'neutral',
	animate,
}: Props) => {
	const variant = animate ? animateVariants[animate] : undefined;
	return (
		<AnimatePresence>
			<motion.button
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
				{children}
			</motion.button>
		</AnimatePresence>
	);
};
`;
	return (
		<div className='border-edgr grid h-[600px] w-[600px] grid-cols-2 items-center rounded border'>
			<div className='flex h-full flex-col gap-5 border-r'>
				<Title>Preview</Title>
				<hr />
				<Button color='blue' animate='fadeIn'>
					Nivox UI
				</Button>
			</div>
			<div className='flex h-full flex-col gap-5'>
				<Title>Code</Title>
				<hr />
				<Highlight code={code} language='tsx' theme={themes.duotoneDark}>
					{({ className, style, tokens, getLineProps, getTokenProps }) => (
						<pre
							className={`${className} h-[300px] overflow-y-auto rounded p-4 font-mono`}
							style={style}
						>
							{tokens.map((line, i) => (
								<div key={`${i}-`} {...getLineProps({ line, key: i })}>
									{line.map((token, key) => (
										<span key={key} {...getTokenProps({ token, key })} />
									))}
								</div>
							))}
						</pre>
					)}
				</Highlight>
			</div>
		</div>
	);
}
