import React from 'react';

import './Button.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button className='custom_button' onClick={onClick}>{children}</button>;
};
