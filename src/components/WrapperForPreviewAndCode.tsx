'use client';

import clsx from 'clsx';
import { Copy, CopyCheck } from 'lucide-react';
import { useState } from 'react';

import MenuTab from './MenuTab';

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
	// TODO: должно передавать isShow для срабатывания анимации fadeIn + смотреть motion-primitive
	const [isShow, setIsShow] = useState<string>('show');
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
			{/* tools */}
			{value === 'preview' ? (
				<div className='absolute -top-7 right-0 flex items-center gap-1.5 text-sm'>
					<MenuTab items={['show', 'hide']} value={isShow} setValue={setIsShow} />
				</div>
			) : (
				<button
					className='absolute -top-6 right-0 transition-all'
					title='Copy code'
					onClick={() => handleCopyCode(code)}
				>
					{isCopy ? <CopyCheck size={19} /> : <Copy size={19} />}
				</button>
			)}
			{/* code section  */}
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
