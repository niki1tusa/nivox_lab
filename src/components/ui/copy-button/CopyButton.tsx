'use client';

import clsx from 'clsx';
import { Copy, CopyCheck } from 'lucide-react';
import { useState } from 'react';

import { ICopyProps } from './copy.types';

export default function CopyButton({ children, code, color }: ICopyProps) {
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
	const text = children ?  `${children}`: code;
	return (
		<div className='flex items-center gap-1'>
			{children && children}
			<button
				className={clsx('transition-all')}
				title='Copy code'
				onClick={() => handleCopyCode(text!)}
			>
				{isCopy ? <CopyCheck size={19} color={color} /> : <Copy size={19} color={color} />}
			</button>
		</div>
	);
}
