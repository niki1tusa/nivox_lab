import Link from 'next/link';

import Title from '@/components/Title';

import { PAGES } from '@/config/pages.config';
import { componentList } from '@/config/Ui.config';




interface Props {
	children: React.ReactNode;
}
export const ON_THIS_PAGE_DATA = ['Preview', 'How to use', 'Custom details'];
export default function layout({ children }: Props) {
	
	return (
		<div className='grid grid-cols-[1fr_2fr_1fr]'>
			<div className='sticky top-0 flex flex-col items-start'>
				<Title>Blocks</Title>
				<div className='flex flex-col'>
					{componentList.map((item, i )=> (
						<Link
							key={i}
							href={PAGES.BLOCK(item)}
						>
							{item}
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
