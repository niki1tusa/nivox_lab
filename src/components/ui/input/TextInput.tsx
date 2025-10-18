import { ITextInputProps } from './text-input.types';

export default function TextInput({ label, placeholder = 'Enter text...' }: ITextInputProps) {
	return (
		<span>
			{label && <label>{label}</label>}
			<input type='text' placeholder={placeholder} className='' />
		</span>
	);
}
