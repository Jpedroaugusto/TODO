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
      <div className='logo'>
        <img alt="logo" src="/svgs/Logo.svg" />
      </div>
      <div className='link'>
        <Link to={href}>{children}</Link>
      </div>
    </header>
  );
}
