import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  classProps?: string; 
}

const Button: React.FC<ButtonProps> = ({ text, onClick, classProps }) => {
  return (
    <button onClick={onClick} className={classProps}>
      {text}
    </button>
  );
};

export default Button;
