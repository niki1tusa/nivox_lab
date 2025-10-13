import Image from 'next/image';

import { NAV_DATA } from '../data/nav.data';
import Link from 'next/link';

export default function Header() {
	return (
		<div className='flex w-full items-center justify-between'>
			<div className='relative h-[100px] w-[100px]'>
				<Image fill alt='logo' src='/logo/logoDark.png' className='absolute' />
			</div>
			<nav className='text-sky flex gap-3 font-bold'>
				{NAV_DATA.map(item => (
					<div key={item.id}>{item.title}</div>
				))}
			</nav>
			<div>
				<Link href='https://github.com/niki1tusa/nivox_lab'>
					<Image width={30} height={30} alt='github-icon' src='/icons/github.svg' />
				</Link>
				{/* theme-toggle */}
			</div>
		</div>
	);
}
