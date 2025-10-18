export const INPUT_TEXT_DATA = [
	{ prop: 'label?', type: 'string', default: '-' },
	{ prop: 'placeholder?', type: 'string', default: "Enter text..." },
];
export const INPUT_TEXT_CODE = `import { ITextInputProps } from "./input.types";

export default function TextInput({label, placeholder = 'Enter text'}:ITextInputProps) {
  return (
	<span>
	   {label && <label>{label}</label>}
		<input type='text' placeholder={placeholder} className=""/>
	</span>
  )
}
`;
