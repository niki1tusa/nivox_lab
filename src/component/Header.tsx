import Image from 'next/image';

import { NAV_DATA } from './nav.data';

export default function Header() {
	return (
		<div className='flex items-center justify-between w-full'>
			<div className='relative h-[100px] w-[100px]'>
				<Image fill alt='logo' src='/logo/logoDark.png' className='absolute' />
			</div>
			<nav className='text-sky flex gap-3 font-bold'>
				{NAV_DATA.map(item => (
					<div key={item.id}>{item.title}</div>
				))}
			</nav>
			<div>
				theme-toggle
			</div>
		</div>
	);
}
