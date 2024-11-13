'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const [isHovering, setIsHovering] = useState(true); // Estado inicial como verdadero

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: { type: 'spring', stiffness: 300 },
    },
    tap: {
      scale: 0.9,
      rotate: -10,
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  const handleClick = () => {
    window.open('https://wa.me/1234567890', '_blank')
  };

  useEffect(() => {
    // empieza el estado de hover
    const interval = setInterval(() => {
      setIsHovering((prev) => !prev);
    }, 1000); // cambiamos el estado cada 1s

    return () => clearInterval(interval); // limpiar estado al desmontar el componente
  }, []);

  return (
    <motion.button
      className="flex items-center justify-center fixed right-10 bottom-10 z-10 p-3 bg-green-500 text-white rounded-full shadow-lg"
      variants={buttonVariants}
      animate={isHovering ? "hover" : {}}
      whileTap="tap"
      onClick={handleClick}
      aria-label='WhatsApp La chacra'
    >
      <FaWhatsapp className='text-4xl' />
    </motion.button>
  );
};

export default WhatsAppButton;
