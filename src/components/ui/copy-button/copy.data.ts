export const COPY_CODE = `'use client';

import clsx from 'clsx';
import { Copy, CopyCheck } from 'lucide-react';
import { useState } from 'react';

import { ICopyProps } from './copy.types';

export default function CopyButton({ children, color }: ICopyProps) {
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
	const text = $'{children}';
	return (
		<div className='flex items-center gap-1'>
            {children}
			<button
				className={clsx('transition-all')}
				title='Copy code'
				onClick={() => handleCopyCode(text)}
			>
				{isCopy ? <CopyCheck size={19}  color={color}/> : <Copy size={19} color={color}/>}
			</button>
		</div>
	);
}`;
export const COPY_DATA = [
	{ prop: 'children', type: 'React.ReactNode', default: "-" },
	{ prop: 'color?', type: 'keyof typeof colorMap', default: "'neutral'" },
];
