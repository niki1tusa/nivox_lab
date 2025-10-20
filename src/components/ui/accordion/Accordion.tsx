'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

import { animateVariants } from '@/components/motion-primitive/animate';

import { IAccordionProps } from './accordion.types';
// TODO: доделать плавную анимацию
export default function Accordion({ data, animate }: IAccordionProps) {
	const [aboutList, setAboutList] = useState<Set<number>>(new Set());
	const toggleOpen = (id: number) => {
		setAboutList(prev => {
			const newSet = new Set(prev);
			newSet.has(id) ? newSet.delete(id) : newSet.add(id);
			return newSet;
		});
	};
	const variant = animate ? animateVariants[animate] : undefined;
	return (
		<ul className='flex w-[500px] flex-col gap-2 rounded p-2'>
			{data.map(item => (
				<li key={item.id} className='border-edge flex flex-col border-b'>
					<div className='flex items-center justify-between'>
						<span className='font-bold'>{item.heading}</span>
						{aboutList.has(item.id) ? (
							<ChevronUp onClick={() => toggleOpen(item.id)} />
						) : (
							<ChevronDown onClick={() => toggleOpen(item.id)} />
						)}
					</div>
					{aboutList.has(item.id) && (
						<motion.div initial={variant?.animate} animate={variant?.animate}>
							{item.title}
						</motion.div>
					)}
				</li>
			))}
		</ul>
	);
}
