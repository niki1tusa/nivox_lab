import clsx from 'clsx';
import { Copy } from 'lucide-react';

interface Props {
	children: React.ReactNode;
	value: string;
}
export default function WrapperForPreviewAndCode({ children, value }: Props) {
	return (
		<div
			className={clsx(
				value === 'code' && 'border-t-30',
				'border-edge relative flex h-[300px] w-[600px] max-w-[600px] flex-col items-center justify-center gap-5 rounded border-8 shadow shadow-neutral-400'
			)}
		>
			{value === 'code' && <Copy className='absolute -top-6 right-0' size={19} />}
			{children}
		</div>
	);
}
