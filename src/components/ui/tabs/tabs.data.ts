export const TABS_CODE = `import clsx from 'clsx';
import { ITabsProps } from './tabs.types';

export default function Tabs({ value, setValue, items, className }: ITabsProps) {
    const itemIndex = items.indexOf(value);
    const width = \`$\{100 / items.length}%\`;
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
                    width: \`calc($\{width} - 8px)\`,
                    transform: \`translate(calc($\{itemIndex * 100}% + 4px), -50%)\`,
                }}
            />
            {items.map(item => (
                <TabItem key={item} text={item} value={value} setValue={setValue} />
            ))} 
        </div>
    );
}
export function TabItem({
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
`

export const TABS_DATA =  [
	{ prop: 'value?', type: 'string', default: '-' },
	{ prop: 'defaultValue?', type: 'string', default: '-' },
	{ prop: 'onValueChange?', type: '(arg: string) => void', default: '-' },
	{ prop: 'items?', type: 'string[]', default: '-' },
    { prop: 'className?', type: 'string', default: '-' },
];
