import type { Metadata } from 'next';

import ClientPage from './ClientPage';
import { TComponentsName } from '@/config/components.config';

export const metadata: Metadata = {
	title: 'name',
};
interface Props {
	params: Promise<{ name: TComponentsName}>;
}
export default async function BlockPage({ params }: Props) {
	const { name } = await params;
	return <ClientPage name={name}/>;
}
