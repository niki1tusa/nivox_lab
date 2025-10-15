'use client';

import clsx from 'clsx';
import { Copy, CopyCheck } from 'lucide-react';
import { useState } from 'react';

interface Props {
	children: React.ReactNode;
	value: string;
	code: string;
}
export default function WrapperForPreviewAndCode({ children, value, code }: Props) {
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

	return (
		<div
			className={clsx(
				value === 'code' && 'border-t-30',
				'border-edge relative flex h-[300px] w-[600px] max-w-[600px] flex-col items-center justify-center gap-5 rounded border-8 shadow shadow-neutral-400'
			)}
		>
			{value === 'code' && (
				<button
					className='absolute -top-6 right-0 transition-all'
					title='Copy code'
					onClick={() => handleCopyCode(code)}
				>
					{isCopy ? <CopyCheck size={19} /> : <Copy size={19} />}
				</button>
			)}
			{children}
		</div>
	);
}
