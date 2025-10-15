import { AnimatePresence, motion } from 'motion/react';
import { Highlight, themes } from 'prism-react-renderer';

import { ICodeProps } from './code.types';
import { animateVariants } from '@/component/motion-primitive/animate';

export default function Code({ code, animate }: ICodeProps) {
	const variant = animate ? animateVariants[animate] : undefined;
	return (
		<AnimatePresence>
			<motion.div
				initial={variant?.initial}
				animate={variant?.animate}
				className='w-full max-w-full overflow-hidden'
			>
				<Highlight code={code} language='tsx' theme={themes.duotoneDark}>
					{({ className, style, tokens, getLineProps, getTokenProps }) => (
						<pre
							className={`${className} h-[300px] overflow-auto rounded p-4 font-mono`}
							style={style}
						>
							{tokens.map((line, i) => (
								<div key={`${i}-`} {...getLineProps({ line, key: i })}>
									{line.map((token, key) => (
										<span key={key} {...getTokenProps({ token, key })} />
									))}
								</div>
							))}
						</pre>
					)}
				</Highlight>
			</motion.div>
		</AnimatePresence>
	);
}
