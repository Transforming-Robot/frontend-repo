import React from 'react';

interface Props {
  className?: string;
  label: string;
  onClick?: (event: React.MouseEvent) => void;
}

export const Button = ({ className, label, onClick }: Props) => (
  <button className={className} onClick={onClick}>
    {label}
  </button>
);
