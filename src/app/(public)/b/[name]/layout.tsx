import { Blocks, Box, TextAlignStart } from 'lucide-react';
import Link from 'next/link';

import { baseComponents, complexComponents } from '@/config/Ui.config';
import { PAGES } from '@/config/pages.config';

import { ON_THIS_PAGE_DATA } from '@/data/nav.data';

interface Props {
	children: React.ReactNode;
}
export default function layout({ children }: Props) {
	return (
		<div className='grid grid-cols-[1fr_2fr_1fr]'>
			<div className='sticky top-0 flex flex-col items-start'>
				<div className='text-foreground-muted flex items-center gap-2 text-lg font-bold'>
					Blocks
				</div>
				<div className='ml-3 flex flex-col gap-1'>
					<div className='flex items-center gap-1 text-base font-medium'>
						<Box size={18} /> Base
					</div>
					<SideList data={baseComponents} />
					<div className='flex items-center gap-1 text-base font-medium'>
						<Blocks size={18} /> Complex
					</div>
					<SideList data={complexComponents} />
				</div>
			</div>
			{children}
			<div className='items-left flex flex-col gap-2'>
				<div className='text-foreground-muted flex items-center gap-2 text-lg font-bold'>
					<TextAlignStart size={18} /> <span>On this page</span>
				</div>
				<SideList data={ON_THIS_PAGE_DATA} />
			</div>
		</div>
	);
}
export function SideList({ data }: { data: string[] }) {
	return (
		<ul className='border-edge mx-1 flex flex-col gap-2 border-l pl-4 text-sm'>
			{data.map((item, i) =>
				data !== ON_THIS_PAGE_DATA ? (
					<Link href={PAGES.BLOCK(item)} key={i} className='hover:text-muted-edge transition-all'>
						{item}
					</Link>
				) : (
					<li ref={ref} className='hover:text-muted-edge transition-all' key={i}>
						{item}
					</li>
				)
			)}
		</ul>
	);
}
