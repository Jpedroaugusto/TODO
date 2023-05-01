import { InputProps } from '../../types/InputProps';

export function Input({ type, name, placeholder }: InputProps) {
  return <input id={name} name={name} type={type} placeholder={placeholder} />;
}
