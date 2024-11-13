'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Asegúrate de importar el componente Image
import {  FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion'; // Importa Framer Motion
import { RxHamburgerMenu  } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";

const dataHeader = [
  {
    id: 1,
    navigate: '/',
    text: 'HOME',
  },
  {
    id: 2,
    navigate: '/#nosotros',
    text: 'NOSOTROS',
  },
  {
    id: 3,
    navigate: '/#talleres',
    text: 'NUESTROS TALLERES',
  },
  {
    id: 4,
    navigate: '/#contacto',
    text: 'CONTACTO',
  },
];

const socialHeader = [
  {
    id: 1,
    link: 'https://www.facebook.com/share/17oaLKA7Cn/?mibextid=LQQJ4d',
    title: 'Facebook de la Chacra',
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    link: 'https://www.tiktok.com/@chacra.granja.ecologica',
    title: 'Instagram de La Chacra',
    icon: <FaInstagram />,
  },
  {
    id: 3,
    link: 'https://www.instagram.com/la.chacra.granja.ecologica/?igsh=cjY2aWduM2x3OTl5',
    title: 'Twitter de La Chacra',
    icon: <FaTiktok />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controla el estado del menú

  const toggleMenu = () => setIsOpen(!isOpen); // Alterna el estado del menú

  return (
    <nav className='bg-principal flex justify-center z-30 relative'>
      <div className='max-w-4xl w-full'>
        <div className='grid grid-cols-2 md:grid-cols-11 items-center py-4 px-8 md:px-0 gap-2 w-full'>
          <div className=" col-span-1 flex md:hidden relative -mt-16">
            <Image src={'https://res.cloudinary.com/dpwklm7yu/image/upload/v1728533746/logochacra_tr2xdf.webp'} alt='Logo la Chacra' width={50} height={50} className='absolute top-0 left-0 right-0 w-[180px]' />
          </div>
          <div className="custom-hidden  md:grid md:col-span-11">


            <ul className='items-center justify-between gap-2 custom-hidden md:flex'>
              {dataHeader.map((item, index) => (
                <React.Fragment key={index}>
                  <li className='text-white text-lg font-light font-mouse'><Link className='text-2xl' href={item.navigate}>{item.text}</Link></li>
                  {index === 1 && (
                    <li className='flex justify-center '>
                      <Link href={'/'} className='relative w-[190px] z-10'><Image
                        src={'https://res.cloudinary.com/dpwklm7yu/image/upload/v1728533746/logochacra_tr2xdf.webp'}
                        alt="Logo La Chacra"
                        className=' absolute -mt-8 left-0 right-0 w-full top-0'
                        width={50}
                        height={50}
                      /></Link>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="col-span-1 flex justify-end md:hidden ">
          <button className='text-white text-3xl  z-10' onClick={toggleMenu}>
            {isOpen ? <LiaTimesSolid /> : <RxHamburgerMenu />}
          </button>
          </div>

          <div className='col-span-2 right-20 absolute ml-9 mt-1 custom-hidden md:grid'>
            <ul className='flex items-center gap-1 justify-center'>
              {socialHeader.map((item, index) => (
                <React.Fragment key={index}>
                  <li className='bg-white text-principal rounded-full text-lg p-1'>
                    <Link
                      href={item.link}
                      title={item.title}
                      rel='noopener noreferrer'
                      aria-label={item.title}
                      target='_blank'
                    >
                      {item.icon}
                    </Link>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>

          {/* Menú móvil con animación de Framer Motion */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className='md:custom-hidden overflow-hidden fixed top-0 left-0 right-0 bg-principal'
          >
            <ul className='flex flex-col items-center gap-4 py-4'>
              {dataHeader.map((item) => (
                <li key={item.id} className='text-white text-lg font-light font-mouse'>
                  <Link href={item.navigate} onClick={toggleMenu}>
                    {item.text}
                  </Link>
                </li>
              ))}
              <div className='flex gap-4'>
                {socialHeader.map((item) => (
                  <li key={item.id} className='bg-white text-principal rounded-full p-2'>
                    <Link
                      href={item.link}
                      title={item.title}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
