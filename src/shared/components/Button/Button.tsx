import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler;
}

export function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
}
