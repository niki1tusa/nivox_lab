import Header from '@/component/Header';
import Title from '@/component/Title';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-[1000px]'>
			<Header />
			<div className='grid grid-cols-[1fr_2fr_1fr]'>
				<div className='flex '>
					<Title>Blocks</Title>
				</div>
				{children}
				<div className='flex justify-end'>
					<Title>On this page</Title>
				</div>
			</div>
		</div>
	);
}
