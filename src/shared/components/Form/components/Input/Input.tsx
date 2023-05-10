import { FieldError } from 'react-hook-form';
import { Label } from '../Label/Label';
import { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div className="input-field">
        {label && <Label>{label}</Label>}
        <input {...rest} ref={ref} />
        {error && <p>{error.message}</p>}
      </div>
    );
  }
);
