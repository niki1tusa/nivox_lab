'use client';

import { useState } from 'react';

import MenuTab from '../../../component/MenuTab';
import WrapperForPreviewAndCode from '../../../component/WrapperForPreviewAndCode';
import { code } from '../../../data/code.data';

import { Button } from '@/component/export-component/button/Button';
import { BUTTON_DATA } from '@/component/export-component/button/button.data';
import Code from '@/component/export-component/code/Code';

export default function ClientPage() {
	const [value, setValue] = useState<string>('preview');
	return (
		<div className='border-edge flex h-[600px] w-full flex-col items-center gap-5'>
			{/* header */}
			<div className='w-full text-4xl'>Button</div>
			<i className='w-full'>- the button component with customizable animations.</i>
			{/* section - preview and code */}
			<div className='w-full text-2xl'>Preview and code</div>
			<MenuTab value={value} setValue={setValue} />
			<WrapperForPreviewAndCode
				value={value}
				code={code}
				preview={
					<Button color='blue' animate='fadeIn'>
						Nivox UI
					</Button>
				}
				codeBlock={<Code code={code} animate='fadeIn' />}
			/>
			{/* section - how to use */}
			<div className='w-full text-2xl'>How to use</div>
			<WrapperForPreviewAndCode
				value='code'
				code={`<Button color='blue' animate='fadeIn'>hello world</Button>`}
				preview={null}
				codeBlock={
					<Code
						code={`<Button color='blue' animate='fadeIn'>hello world</Button>`}
						animate='fadeIn'
					/>
				}
			/>
			{/* section - details */}
			<div className='w-full text-2xl'>Custom details</div>
			<div className='border-edge grid w-full grid-cols-3 rounded border-2'>
				<div className='border-edge flex flex-col border-r-2'>
					<span className='border-edge bg-edge/30 border-b-2 px-2 py-1'>Prop</span>
					<div>
						{BUTTON_DATA.map(item => (
							<div key={item.prop} className='border-edge h-[35] border-b-2 px-2 py-1'>
								{item.prop}
							</div>
						))}
					</div>
				</div>
				<div className='border-edge flex flex-col border-r-2'>
					<span className='border-edge bg-edge/30 border-b-2 px-2 py-1'>Type</span>
					<div>
						{BUTTON_DATA.map(item => (
							<div key={item.prop} className='border-edge h-[35] border-b-2 px-2 py-1'>
								{item.type}
							</div>
						))}
					</div>
				</div>
				<div className='flex flex-col'>
					<span className='border-edge bg-edge/30 border-b-2 px-2 py-1'>Default</span>
					<div>
						{BUTTON_DATA.map(item => (
							<div key={item.prop} className='border-edge h-[35] border-b-2 px-2 py-1'>
								{item.default}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
