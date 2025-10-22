'use client';

import clsx from 'clsx';
import { useState } from 'react';

import ToolsBar from './ToolsBar';

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
	height,
}: Props) {
	// TODO: должно передавать isShow для срабатывания анимации fadeIn + смотреть motion-primitive
	const [isShow, setIsShow] = useState<string>('show');
	return (
		<div
			className={clsx(
				'border-edge flex w-[600px] max-w-[600px] flex-col items-stretch rounded border-8 border-t-0 shadow shadow-neutral-400'
			)}
			style={{ height }}
		>
			{/* tools */}
			<ToolsBar value={value} isShow={isShow} setIsShow={setIsShow} code={code} />

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
