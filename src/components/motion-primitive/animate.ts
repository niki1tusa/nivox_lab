export const animateVariants = {
	fadeIn: {
		initial: { opacity: 0, scale: 0.9, y: 8 },
		animate: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 250, damping: 20, mass: 0.8 },
		},
	},
} as const;