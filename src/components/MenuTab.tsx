import clsx from 'clsx';

import MenuItemTab from './MenuItemTab';

interface Props {
	value: string;
	setValue: (arg: string) => void;
	items: string[];
	className?: string;
}
export default function MenuTab({ value, setValue, items, className }: Props) {
	const itemIndex = items.indexOf(value);
	const width = `${100 / items.length}%`;
	return (
		<div
			className={clsx(
				'relative flex justify-between gap-3 rounded px-1 py-2 shadow shadow-neutral-400',
				className
			)}
		>
			<div
				className={clsx(
					'bg-edge absolute top-1/2 h-[70%] rounded-lg transition-transform duration-300 ease-in-out'
				)}
				style={{
					width: `calc(${width} - 8px)`, 
					transform: `translate(calc(${itemIndex * 100}% + 4px), -50%)`,
				}}
			/>
			{items.map(item => (
				<MenuItemTab key={item} text={item} value={value} setValue={setValue} />
			))}
		</div>
	);
}
