import type { Metadata } from 'next';

import { TComponentsName } from '@/config/Ui.config';
import { SITE_NAME } from '@/config/seo.config';

import UiCard from './UiCard';

function capitalize(name: string) {
	return name.charAt(0).toUpperCase() + name.slice(1);
}
interface Props {
	params: { name: TComponentsName };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	return {
		title: `${SITE_NAME} | ${capitalize(params.name)}`,
	};
}

export default  function BlockPage({ params }: Props) {
	return <UiCard name={params.name} />;
}
