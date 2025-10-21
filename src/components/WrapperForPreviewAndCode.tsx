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
				'border-edge flex w-[600px] max-w-[600px] flex-col items-stretch rounded border-8 border-t-0 shadow shadow-neutral-400'
			)}
			style={{ height }}
		>
			{/* tools */}
			<div className='bg-edge z-10 h-[35px] w-full relative'>
				{value === 'preview' ? (
					<div className='max-h-[35px] absolute top-1 right-0  text-sm'>
						<MenuTab items={['show', 'hide']} value={isShow} setValue={setIsShow} />
					</div>
				) : (
					<button
						className='absolute top-1 right-0 transition-all'
						title='Copy code'
						onClick={() => handleCopyCode(code)}
					>
						{isCopy ? <CopyCheck size={19} /> : <Copy size={19} />}
					</button>
				)}
			</div>

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
