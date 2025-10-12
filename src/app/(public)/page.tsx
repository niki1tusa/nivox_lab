// Landing
export const NAV_DATA = [
	{ id: 1, title: 'Blocks' },
	{ id: 2, title: 'Constuctor' },
	{ id: 3, title: 'Docs' },
];
export default function Home() {
	return (
		<div className='flex h-screen flex-col items-center justify-center'>
			<header>
				<div>LOGO</div>
				<nav className='text-sky flex gap-3 font-bold'>
					{NAV_DATA.map(item => (
						<div key={item.id}>{item.title}</div>
					))}{' '}
				</nav>
			</header>

			<span className='rounded border p-2 text-2xl font-bold'>
				<span className='text-foreground-muted'>Nivox Lab</span> - is a library of ready-made
				<br /> ui blocks to speed up development
			</span>
		</div>
	);
}
