import { Play } from 'lucide-react';

import Chart from '@/component/Chart';
import Title from '@/component/Title';
import { Button } from '@/component/ui/button/Button';
import { ABOUT_DATA } from '@/data/about.data';

// Landing
export default function Home() {
	return (
		<div className='flex h-screen flex-col items-center gap-5'>
			<span className='text-2xl font-bold 2xl:text-5xl'>
				<span className='text-foreground-muted'>Nivox Lab</span> - is a library of ready-made
				<br /> ui blocks to speed up development
			</span>
			<Button color='blue' animate='fadeIn'>
				Get started <Play size={18} />
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
