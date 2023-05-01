import { Border } from '../Border/Border';
import './title.scss';

interface TitleProps {
  children: string;
}

export function Title({ children }: TitleProps) {
  return (
    <div className="title">
      <Border />
      <h1>{children}</h1>
    </div>
  );
}
