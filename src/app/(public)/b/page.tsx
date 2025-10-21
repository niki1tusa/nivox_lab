import type { Metadata } from 'next';
import Link from 'next/link';

import Title from '@/components/Title';

import { baseComponents, complexComponents } from '@/config/Ui.config';
import { PAGES } from '@/config/pages.config';
import { SITE_NAME } from '@/config/seo.config';

export const metadata: Metadata = {
	title: `${SITE_NAME} | Blocks`,
};

export default function BlocksPage() {
	return (
		<div className='flex flex-col items-center gap-5 text-lg font-bold'>
			<Title>Base</Title>
			<div className='flex flex-col gap-3'>
				{baseComponents.map((block, i) => (
					<Link
						className='border-edge w-[300px] rounded border-2 px-3 py-2 text-center transition-colors hover:bg-gray-100'
						key={i}
						href={PAGES.BLOCK(block)}
					>
						{block.charAt(0) + block.slice(1)}
					</Link>
				))}
			</div>
			<Title>Complex</Title>
			<div className='flex flex-col gap-3'>
				{complexComponents.map((block, i) => (
					<Link
						className='border-edge w-[300px] rounded border-2 px-3 py-2 text-center transition-colors hover:bg-gray-100'
						key={i}
						href={PAGES.BLOCK(block)}
					>
						{block.charAt(0) + block.slice(1)}
					</Link>
				))}
			</div>
		</div>
	);
}
