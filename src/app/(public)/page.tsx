import Header from '../../component/Header';

import Accordion from '@/component/Accordion';
import Chart from '@/component/Chart';
import Title from '@/component/Title';

// Landing
export default function Home() {
	return (
		<div className='flex h-screen flex-col items-center'>
			<Header />
			<span className='border-edge rounded border p-2 text-2xl font-bold'>
				<span className='text-foreground-muted'>Nivox Lab</span> - is a library of ready-made
				<br /> ui blocks to speed up development
			</span>
			<div className='mt-5'>
				<Title>About Us</Title>
				{/* accordion */}
				<Accordion />
			</div>
			<div className='mt-5 w-[700px] h-[300px]'>
				<Title>Boost development with Nivox Lab</Title>
				<Chart />
			</div>
		</div>
	);
}
