export interface ITabsProps {
	value: string;
	setValue: (arg: string) => void;
	items: string[];
	className?: string;
}