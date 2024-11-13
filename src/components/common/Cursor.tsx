'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CursorImage from '@/resources/images/fondo.svg';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      // Actualiza la posición sin retrasos usando requestAnimationFrame.
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      });
    };

    const rotateImages = () => {
      setAngle((prevAngle) => (prevAngle + 2) % 360);
      requestAnimationFrame(rotateImages);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(rotateImages);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const getImagePosition = (index: number) => {
    const radius = 50;
    const angleOffset = (index * 120 + angle) * (Math.PI / 180);
    return {
      left: position.x + radius * Math.cos(angleOffset),
      top: position.y + radius * Math.sin(angleOffset),
    };
  };

  return (
    <>
      {[0, 1, 2].map((index) => {
        const { left, top } = getImagePosition(index);
        return (
          <Image
            key={index}
            src={CursorImage}
            alt={`Cursor ${index + 1}`}
            width={40}
            height={40}
            className='z-20'
            style={{
              position: 'fixed',
              left,
              top,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </>
  );
};

export default Cursor;
