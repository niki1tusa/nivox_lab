'use client';

import { ComponentType, useEffect, useRef, useState } from 'react';

import MenuTab from '@/components/MenuTab';
import WrapperForPreviewAndCode from '@/components/WrapperForPreviewAndCode';
import Code from '@/components/ui/code/Code';

import { REGISTRY, TComponentsName } from '@/config/Ui.config';
import { pickUiItem } from '@/config/helper';

import { useScrollStore } from '@/store/scroll.store';

import UiCardDetails from './UiCardDetails';

export default function UiCard({ name }: { name: TComponentsName }) {
	const [value, setValue] = useState<string>('preview');
	const { setRef } = useScrollStore();
	const previewRef = useRef(null);
	const howToUseRef = useRef(null);
	const detailsRef = useRef(null);
	const current = pickUiItem(REGISTRY, name);
	useEffect(() => {
		setRef('Preview', previewRef.current);
		setRef('How to use', howToUseRef.current);
		setRef('Details', detailsRef.current);
	}, [setRef]);
	if (!current) {
		return <div>Component not found!</div>;
	}
	const { component, defaultProps, description, details, howToUse, code } = current;
	const Component = component as ComponentType<typeof defaultProps>;
	return (
		<div className='border-edge flex w-full flex-col items-center gap-5'>
			{/* header */}
			<div className='w-full text-4xl'>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
			<i className='w-full'>- {description}.</i>
			{/* section - preview and code */}
			<div ref={previewRef} className='w-full text-2xl'>
				Preview and code
			</div>
			<MenuTab value={value} setValue={setValue} items={['preview', 'code']} />
			<WrapperForPreviewAndCode
				value={value}
				code={code}
				preview={<Component {...defaultProps} />}
				codeBlock={<Code code={code} animate='fadeIn' />}
			/>
			<div className='flex flex-col gap-5'>
				{Array.from({ length: 10 }, (_, i) => 1 + i).map(item => (
					<div key={item}>{item}</div>
				))}
			</div>
			{/* section - how to use */}
			<div ref={howToUseRef} className='w-full text-2xl'>
				How to use
			</div>
			<WrapperForPreviewAndCode
				value='code'
				code={howToUse}
				preview={null}
				codeBlock={<Code code={howToUse} animate='fadeIn' />}
			/>
			<div className='flex flex-col gap-5'>
				{Array.from({ length: 10 }, (_, i) => 1 + i).map(item => (
					<div key={item}>{item}</div>
				))}
			</div>
			{/* section - details */}
			<div ref={detailsRef} className='w-full text-2xl'>
				Details
			</div>
			<UiCardDetails data={details} />
		</div>
	);
}
