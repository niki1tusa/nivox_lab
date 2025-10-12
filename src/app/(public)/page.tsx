import Header from '../../component/Header';

// Landing
export default function Home() {
	return (
		<div className='flex h-screen flex-col items-center  '>
			<Header />
			<span className='rounded border p-2 text-2xl font-bold'>
				<span className='text-foreground-muted'>Nivox Lab</span> - is a library of ready-made
				<br /> ui blocks to speed up development 
			</span>
		</div>
	);
}
