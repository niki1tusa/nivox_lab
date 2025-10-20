import clsx from 'clsx';

export default function MenuItemTab({
	text,
	value,
	setValue,
}: {
	text: string;
	value: string;
	setValue: (arg: string) => void;
}) {
	const itemContent = text.charAt(0).toUpperCase() + text.slice(1);
	return (
		<span
			onClick={() => setValue(text)}
			className={clsx(
				'z-20 flex-1 cursor-pointer items-center justify-center rounded px-2 py-1',
				value === text ? 'text-black' : 'text-gray-500'
			)}
		>
			{itemContent}
		</span>
	);
}
