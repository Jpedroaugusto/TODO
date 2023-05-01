import { ReactNode } from 'react';
import './main.scss';

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return <main>{children}</main>;
}
