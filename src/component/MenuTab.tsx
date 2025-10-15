import clsx from 'clsx';

interface Props {
	value: string;
	setValue: (arg: string) => void;
}
export default function MenuTab({ value, setValue }: Props) {
	return (
		<div className='flex w-[300px] justify-around gap-3 rounded px-3 py-2 shadow shadow-neutral-400'>
			<span
				onClick={() => setValue('preview')}
				className={clsx(
					'flex cursor-pointer items-center justify-center rounded px-2 py-1',
					value === 'preview' && 'bg-edge'
				)}
			>
				Preview
			</span>
			<span
				onClick={() => setValue('code')}
				className={clsx(
					'flex cursor-pointer items-center justify-center rounded px-2 py-1',
					value === 'code' && 'bg-edge'
				)}
			>
				Code
			</span>
		</div>
	);
}
