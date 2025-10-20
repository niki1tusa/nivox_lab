'use client';

import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
    // TODO: лагает при перехоже между страницами
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={pathname}
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -10 }}
				transition={{ duration: 0.25, ease: 'easeInOut' }}
				className='min-h-screen'
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
