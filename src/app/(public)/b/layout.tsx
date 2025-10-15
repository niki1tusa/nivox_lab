import Link from 'next/link';

import Title from '@/component/Title';
import { BLOCKS_DATA } from '@/data/blocks.data';

interface Props {
	children: React.ReactNode;
}
export default function layout({ children }: Props) {
	return (
		<div className='grid grid-cols-[1fr_2fr_1fr]'>
			<div className='flex flex-col items-start'>
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
			<div className='flex justify-end'>
				<Title>On this page</Title>
			</div>
		</div>
	);
}
