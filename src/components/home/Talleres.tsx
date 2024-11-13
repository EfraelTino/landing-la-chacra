'use client'; // Asegúrate que el archivo solo se renderice del lado del cliente

import Image from 'next/image';
import iconGreen from '@/resources/images/icongreen.png'; // Recurso correcto
import Carousel from './components/Carousel';
import { motion } from 'framer-motion';
import type { Taller } from '@/interfaces/landingInterfaces';
import { useEffect, useState } from 'react';
import { getDatas } from '@/app/utils/api';

const Talleres: React.FC = () => {
  const [data, setData] = useState<{ talleres: Taller[] } | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDatas('/data.json');
      setData(result);
    };

    fetchData();
  }, []);



  const fadeInVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: "easeOut" }
    },
  };
  console.log(data?.talleres)
  return (
    <>
      <section className="flex justify-center relative backdrop-blur-[2px] pt-12 pb-6 z-10" id='talleres'>
        <div className="px-4 md:px-16">
          <motion.h2
             initial="hidden"
             whileInView="visible"
             exit="hidden"
             variants={fadeInVariants}
             viewport={{ once: true, amount: 0.3 }} 
          className="text-principal font-mouse uppercase flex items-center space-x-4 text-4xl  md:text-6xl">
            <Image src={iconGreen} alt="Icon green" width={50} height={50} className="mr-4 w-full" />
            {
                    data?.talleres?.[0]?.titulo
          }
            <Image src={iconGreen} alt="Icon green" width={50} height={50} className="mr-4 w-full" />
          </motion.h2>
        </div>
      </section>
      <section
        className="flex justify-center backdrop-blur-[2px] pb-12 md:px-16 md:mx-18 relative z-10 w-full"
      >

        <Carousel items={data?.talleres?.[0]?.tallerItems || []} /> 
      </section>
    </>
  );
};

export default Talleres;
