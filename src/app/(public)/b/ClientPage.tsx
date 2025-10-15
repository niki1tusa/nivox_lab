'use client';

import clsx from 'clsx';
import { Copy } from 'lucide-react';
import { useState } from 'react';

import MenuTab from './MenuTab';
import WrapperForPreviewAndCode from './WrapperForPreviewAndCode';
import { code } from './code.data';
import { Button } from '@/component/export-component/button/Button';
import Code from '@/component/export-component/code/Code';

export default function ClientPage() {
	const [value, setValue] = useState<string>('preview');
	return (
		<div className='border-edgr flex h-[600px] w-full flex-col items-center gap-5'>
			<MenuTab value={value} setValue={setValue} />
			<WrapperForPreviewAndCode value={value}>
				{value === 'preview' ? (
					<Button color='blue' animate='fadeIn'>
						Nivox UI
					</Button>
				) : (
					<Code code={code} animate='fadeIn' />
				)}
			</WrapperForPreviewAndCode>
		</div>
	);
}
