import { CircleGauge, Link, LucideIcon, MonitorSmartphone, PackageOpen } from 'lucide-react';

export interface IAboutItem {
	id: number;
	icon: LucideIcon;
	title: string;
}

export const ABOUT_DATA: IAboutItem[] = [
	{ id: 1, icon: Link, title: 'tailwindcss + motion' },
	{ id: 2, icon: PackageOpen, title: 'from the box' },
	{ id: 3, icon: CircleGauge, title: 'dev speed' },
	{ id: 4, icon: MonitorSmartphone, title: 'adaptive' },
];
