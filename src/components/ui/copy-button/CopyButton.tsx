'use client';

import clsx from 'clsx';
import { Copy, CopyCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

import { ICopyProps } from './copy.types';
import { animateVariants } from '@/components/motion-primitive/animate';
// TODO: сделать анимацию переиспользуемой
export default function CopyButton({ children, code, color, variant, animate }: ICopyProps) {
	const [isCopy, setIsCopy] = useState<boolean>(false);
	const handleCopyCode = async (code: string) => {
		try {
			navigator.clipboard.writeText(code);
			setIsCopy(true);
			setTimeout(() => setIsCopy(false), 2000);
		} catch (e) {
			console.error('Error when copying!');
		}
	};
	const text = children ? `${children}` : code;
	const framer = animate? animateVariants[animate]: undefined
	return (
		<div className='flex items-center gap-1'>
			{children && children}
			<motion.button
			initial={framer?.animate}
				whileHover={{
					scale: 1.05,
					transition: { duration: 0.1 },
				}}
				whileTap={{ scale: 0.5 }}
				transition={{ type: 'spring', stiffness: 420, damping: 24, mass: 0.6 }}
				className={clsx(
					'transition-all',
					variant === 'neutral' && 'border-edge rounded-md border p-1.5 hover:bg-gray-100'
				)}
				title='Copy code'
				onClick={() => handleCopyCode(text!)}
			>
				{isCopy ? <CopyCheck size={19} color={color} /> : <Copy size={19} color={'#0f172a'} />}
			</motion.button>
		</div>
	);
}
