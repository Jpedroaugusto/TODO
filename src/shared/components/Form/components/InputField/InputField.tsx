import { Input } from '../../../Input/Input';
import { Label } from '../Label/Label';
import { InputProps } from '../../../../types/InputProps';
import './inputField.scss';

interface InputFieldProps extends InputProps {
  label: string;
}

export function InputField({ label, ...InputProps }: InputFieldProps) {
  return (
    <div className='input-field'>
      <Label htmlFor={InputProps.name}>{label}</Label>
      <Input {...InputProps} />
    </div>
  );
}
