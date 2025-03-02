import { useMemo } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: Props) {
  const memoizedClassName = useMemo(() => `text-2xl font-bold ${className}`, [className]);

  return <h1 className={memoizedClassName}>{children}</h1>;
}
