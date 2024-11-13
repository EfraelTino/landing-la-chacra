import React from 'react';

interface CardProps {
  children: React.ReactNode; 
  classCard?: string;
}

const Card: React.FC<CardProps> = ({ children, classCard }) => {
  return (
    <section className={classCard}>
      {children}
    </section>
  );
};

export default Card;
