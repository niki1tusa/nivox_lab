import { IInputProps } from "./input.types";

export default function TextInput({label, placeholder = 'Enter text'}:IInputProps) {
  return (
    <span>
       {label && <label>{label}</label>}
        <input type='text' placeholder={placeholder} className=""/>
    </span>
  )
}
