import type { Metadata } from 'next';
import Link from 'next/link';

import Title from '@/components/Title';

import { PAGES } from '@/config/pages.config';
import { SITE_NAME } from '@/config/seo.config';

import { BLOCK_LIST } from '@/data/blocks.data';

export const metadata: Metadata = {
	title: `${SITE_NAME} | Blocks`,
};

export default function BlocksPage() {
	return (
		<div className='text-lg font-bold flex flex-col items-center gap-5'>
			<Title>Block List</Title>
			<div className='flex flex-col  gap-3'>
				{BLOCK_LIST.map(block => (
					<Link
						className='border-edge w-[300px] text-center rounded border-2 px-3 py-2 hover:bg-gray-100 transition-colors'
						key={block.id}
						href={PAGES.BLOCK(block.title)}
					>
						{block.title.charAt(0) + block.title.slice(1)}
					</Link>
				))}
			</div>
		</div>
	);
}
