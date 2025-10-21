import Image from 'next/image';
import Link from 'next/link';

import { NAV_DATA } from '../data/nav.data';

export default function Header() {
	return (
		<div className='bg-background/95 sticky top-0 z-50 flex w-full items-center justify-between'>
			<Link href='/' className='relative h-[100px] w-[100px] 2xl:h-[140px] 2xl:w-[140px]'>
				<Image fill alt='logo' src='/logo/hard.png' className='absolute' />
			</Link>
			<nav className='text-sky flex gap-3 font-bold'>
				{NAV_DATA.map(item => (
					<Link href={item.link} key={item.id}>
						{item.title}
					</Link>
				))}{' '}
				<Link href='https://github.com/niki1tusa/nivox_lab'>
					<Image width={30} height={30} alt='github-icon' src='/icons/github.svg' />
				</Link>
			</nav>
			{/* <div>
			
				 theme-toggle 
			</div> */}
		</div>
	);
}
