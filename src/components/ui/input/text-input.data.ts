export const INPUT_TEXT_DATA = [
	{ prop: 'label?', type: 'string', default: '-' },
	{ prop: 'placeholder?', type: 'string', default: 'Enter text...' },
	{ prop: 'query?', type: 'string', default: '-' },
	{ prop: 'setQuery?', type: '(arg:string)=>void', default: '-' },
];
export const INPUT_TEXT_CODE = `'use client';

import clsx from 'clsx';
import { useId } from 'react';

import { ITextInputProps } from './text-input.types';

export default function TextInput({
	label,
	placeholder = 'Enter text...',
	query,
	setQuery,
}: ITextInputProps) {
	const id = useId();
	return (
		<span className='flex items-center gap-2'>
			{label && (
				<label htmlFor={id} className='text-lg'>
					{label}
				</label>
			)}
			<input
				id={id}
				value={query ?? ''}
				onChange={e => setQuery?.(e.target.value)}
				readOnly={!setQuery} 
				type='text'
				placeholder={placeholder}
				className={clsx(
					'rounded-xl px-3 py-1.5 shadow ring-0 shadow-neutral-400 transition-all',
					'focus:ring-sky focus:shadow-sky focus:ring-1 focus:ring-offset-0 focus:outline-none'
				)}
			/>
		</span>
	);
}

`;
