import { ReactNode, FormEvent} from 'react';

import './form.scss';

interface FormProps {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function Form({ children, onSubmit }: FormProps) {
  return (
    <form method="POST" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
