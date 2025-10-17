import type { Metadata } from 'next';
import Link from 'next/link';

import { PAGES } from '@/config/pages.config';
import { SITE_NAME } from '@/config/seo.config';

export const metadata: Metadata = {
	title: `${SITE_NAME} | Blocks`,
};

// TODO: получать ключи из components.config
const COMPONENTS = ['button', 'code', 'accordion', 'TextInput'];
export default function BlocksPage() {
	// list componenet
	return (
		<div className='flex flex-col'>
			{COMPONENTS.map(name => (
				<Link key={name} href={PAGES.BLOCK(name)}>{name}</Link>
			))}
		</div>
	);
}
