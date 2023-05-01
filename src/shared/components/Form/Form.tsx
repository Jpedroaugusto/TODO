import { ReactNode } from 'react';
import './form.scss';

interface FormProps {
  children: ReactNode;
  action?: string;
}

export function Form({ children, action }: FormProps) {
  return (
    <form action={action} method="POST" encType="multipart/form-data">
      {children}
    </form>
  );
}
