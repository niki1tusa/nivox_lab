'use client';

import clsx from 'clsx';
import { Copy, CopyCheck } from 'lucide-react';
import { useState } from 'react';

interface Props {
	value: string;
	code: string;
	preview: React.ReactNode;
	codeBlock: React.ReactNode;
	height?: number;
}
export default function WrapperForPreviewAndCode({
	value,
	code,
	preview,
	codeBlock,
	height = 300,
}: Props) {
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
				'border-t-35',
				'border-edge relative flex w-[600px] max-w-[600px] items-stretch rounded border-8 shadow shadow-neutral-400'
			)}
			style={{ height }}
		>
			{value === 'preview' && (
				<div className='absolute -top-7 right-0 flex items-center gap-1.5 text-sm'>
					<button className='rounded border border-gray-400 bg-white px-1'>Show</button>
					<button className='rounded border px-1 border-gray-400'>Hide</button>
				</div>
			)}
			{value === 'code' && (
				<button
					className='absolute -top-6 right-0 transition-all'
					title='Copy code'
					onClick={() => handleCopyCode(code)}
				>
					{isCopy ? <CopyCheck size={19} /> : <Copy size={19} />}
				</button>
			)}
			<div className='h-full w-full overflow-hidden'>
				{value === 'code' ? (
					codeBlock
				) : (
					<div className='flex w-full items-center justify-center' style={{ height }}>
						{preview}
					</div>
				)}
			</div>
		</div>
	);
}
