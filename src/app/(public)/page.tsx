import { Play } from 'lucide-react';

import Chart from '@/components/Chart';
import Title from '@/components/Title';
import Button from '@/components/ui/button/Button';

import { ABOUT_DATA } from '@/data/about.data';
import Link from 'next/link';
import { PAGES } from '@/config/pages.config';

// Landing
export default function Home() {
	return (
		<div className='flex h-screen flex-col items-center gap-10 2xl:gap-20'>
			<span className='text-2xl font-bold 2xl:text-5xl'>
				<span className='text-foreground-muted'>Nivox Lab</span> - is a library of ready-made
				<br /> ui blocks to speed up development
			</span>
			<Button color='blue' animate='fadeIn'>
				<Link href={PAGES.BLOCKS}><span className='flex gap-2 items-center'>Get started <Play size={18} /></span></Link>
			</Button>
			<div className='mt-5 grid grid-cols-4 gap-1 text-[12px]'>
				{ABOUT_DATA.map(item => (
					<div key={item.id} className='flex flex-col items-center gap-2 text-center'>
						<item.icon size={20} />
						<span>{item.title}</span>
					</div>
				))}
			</div>
			<div className='mt-5 h-[300px] w-full'>
				<Title>Boost development with Nivox Lab</Title>
				<Chart />
			</div>
		</div>
	);
}
