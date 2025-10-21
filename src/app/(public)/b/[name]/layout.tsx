import { Blocks, Box, TextAlignStart } from 'lucide-react';

import { baseComponents, complexComponents } from '@/config/Ui.config';

import { SideList } from './SideList';
import { ON_THIS_PAGE_DATA } from '@/data/nav.data';

interface Props {
	children: React.ReactNode;
}
export default function layout({ children }: Props) {
	return (
		<div className='grid min-h-screen grid-cols-[1fr_2fr_1fr]'>
			<div className='sticky top-[100px] 2xl:top-[140px] z-40 flex flex-col items-start self-start'>
				<div className='text-foreground-muted flex items-center gap-2 text-lg font-bold'>
					Blocks
				</div>
				<div className='ml-3 flex flex-col gap-1'>
					<div className='flex items-center gap-1 text-base font-medium'>
						<Box size={18} /> Base
					</div>
					<SideList data={baseComponents} isComponent />
					<div className='flex items-center gap-1 text-base font-medium'>
						<Blocks size={18} /> Complex
					</div>
					<SideList data={complexComponents} isComponent />
				</div>
			</div>
			{children}
			<div className='sticky top-[100px] 2xl:top-[140px] z-40 flex flex-col items-start gap-2 self-start'>
				<div className='text-foreground-muted flex items-center gap-2 text-lg font-bold'>
					<TextAlignStart size={18} /> <span>On this page</span>
				</div>
				<SideList data={ON_THIS_PAGE_DATA} />
			</div>
		</div>
	);
}
