import Header from '@/component/Header';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-[1000px]'>
			<Header />
			{children}
		</div>
	);
}
