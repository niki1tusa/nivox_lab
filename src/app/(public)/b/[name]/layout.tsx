import Link from 'next/link';

import { BLOCKS_DATA } from '@/data/blocks.data';
import Title from '@/components/Title';

interface Props {
	children: React.ReactNode;
}
export const ON_THIS_PAGE_DATA = ['Preview', 'How to use', 'Custom details'];
export default function layout({ children }: Props) {
	return (
		<div className='grid grid-cols-[1fr_2fr_1fr] '>
			<div className='flex flex-col items-start sticky top-0'>
				<Title>Blocks</Title>
				<div className='flex flex-col'>
					{BLOCKS_DATA.map(item => (
						<Link key={item.id} href={item.link}>
							{item.title}
						</Link>
					))}
				</div>
			</div>
			{children}
			<div className='items-left flex flex-col gap-2'>
				<div className='text-2xl font-bold'>On this page</div>
				<ul>
					{ON_THIS_PAGE_DATA.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
