import { motion } from 'motion/react';
import { Highlight, themes } from 'prism-react-renderer';

import { animateVariants } from '@/components/motion-primitive/animate';

import { ICodeProps } from './code.types';

export default function Code({ code, animate }: ICodeProps) {
	const variant = animate ? animateVariants[animate] : undefined;
	return (
		<motion.div
			initial={variant?.initial}
			animate={variant?.animate}
			className='h-full min-h-0 w-full overflow-hidden'
		>
			<Highlight code={code} language='tsx' theme={themes.duotoneDark}>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre className={`${className} h-full overflow-auto rounded p-4 font-mono`} style={style}>
						{tokens.map((line, i) => {
							const lineProps = getLineProps({ line });
							return (
								<div key={i} {...lineProps}>
									{line.map((token, j) => {
										const tokenProps = getTokenProps({ token });
										return <span key={j} {...tokenProps} />;
									})}
								</div>
							);
						})}
					</pre>
				)}
			</Highlight>
		</motion.div>
	);
}
