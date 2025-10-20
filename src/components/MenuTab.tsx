import MenuItemTab from './MenuItemTab';

interface Props {
	value: string;
	setValue: (arg: string) => void;
	items: string[];
}
export default function MenuTab({ value, setValue, items }: Props) {
	const itemIndex = items.indexOf(value);
	const width = `${100 / items.length}%`;
	return (
		<div className='relative flex justify-between gap-3 rounded px-1 py-2 shadow shadow-neutral-400'>
			<div
				className='bg-edge absolute top-1/2 left-0 flex h-[70%]  items-center justify-center rounded-lg transition-transform duration-300 ease-in-out'
				style={{ width, transform: `translate(${itemIndex * 100}%, -50%)` }}
			/>
			{items.map(item => (
				<MenuItemTab key={item} text={item} value={value} setValue={setValue} />
			))}
		</div>
	);
}
