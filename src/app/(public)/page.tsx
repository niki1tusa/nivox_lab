import { Play } from 'lucide-react';

import Accordion from '@/component/Accordion';
import Button from '@/component/Button';
import Chart from '@/component/Chart';
import Title from '@/component/Title';

// Landing
export default function Home() {
	return (
		<div className='flex h-screen flex-col items-center gap-5'>
			
			<span className='text-2xl font-bold 2xl:text-5xl'>
				<span className='text-foreground-muted'>Nivox Lab</span> - is a library of ready-made
				<br /> ui blocks to speed up development
			</span>
			<Button>
				Get started <Play size={18}/>
			</Button>
			<div className='mt-5'>
				<Title>About Us</Title>
				{/* accordion */}
				<Accordion />
			</div>
			<div className='mt-5 h-[300px] w-[700px]'>
				<Title>Boost development with Nivox Lab</Title>
				<Chart />
			</div>
		</div>
	);
}
