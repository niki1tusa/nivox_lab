export interface IAboutItem {
	id: number;
	heading: string;
	title: string;
}
//icon: , title: join tailwindcss + framer-motion
// icon: , title: more variants animate
// icon: , title: development speed
// icon: , title: adaptive component
export const ABOUT_DATA: IAboutItem[] = [
	{
		id: 1,
		heading: 'We build tools for creators',
		title:
			'At Nivox Lab, we empower designers and developers to transform ideas into polished, functional interfaces — fast, intuitive, and fun.',
	},
	{
		id: 2,
		heading: 'Design smarter, not harder',
		title:
			'Mix, match, and customize components in seconds. Our mission is to remove friction, so you can focus on what truly matters — creating.',
	},
	{
		id: 3,
		heading: 'Launch with confidence',
		title:
			'Download clean, production-ready code and bring your product to life. From concept to launch, Nivox Lab has your UI covered.',
	},
];
