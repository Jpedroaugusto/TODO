import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

interface HeaderProps {
  href: string;
  children: ReactNode;
}

export function Header({ href, children }: HeaderProps) {
  return (
    <header>
      <div>
        <img alt="logo" src="/svgs/Logo.svg" />
      </div>
      <div>
        <Link to={href}>{children}</Link>
      </div>
    </header>
  );
}
