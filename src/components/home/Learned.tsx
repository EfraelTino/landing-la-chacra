'use client';
import Card from "../common/Card";
import type { Benefit } from "@/interfaces/landingInterfaces";
import React, { useEffect, useState } from "react";
import ImageSection from "../common/ImageSection";
import TextSection from "./components/TextSection";
import { motion } from "framer-motion";
import useOnScreen from "../hooks/useOnScreen";
import { getDatas } from "@/app/utils/api";
import CheckImage from '@/resources/images/checkicon.png';

const fadeInVariants = {
  hidden: { opacity: 0, y: 250 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Learned: React.FC = () => {
  const { ref: firstCardRef } = useOnScreen();
  const { ref: secondCardRef } = useOnScreen();
  const [data, setData] = useState<{ benefits: Benefit[] } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDatas('/data.json');
        if (result) {
          setData(result);  // Establecemos los datos correctamente
        } else {
          console.error('Datos incorrectos en el JSON:', result);
        }
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!data || !data.benefits || data.benefits.length === 0) {
    return <div>No se encontraron beneficios.</div>;
  }

  return (
    <section className="bg-white flex flex-col justify-center items-center z-10">
      <div className="relative z-[2] w-full text-center">
        {data.benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            ref={index === 0 ? firstCardRef : secondCardRef}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <Card classCard={`grid md:grid-cols-2 items-center ${index % 2 === 0 ? 'bg-[#EF9956]' : 'bg-[#14830A]'}`}>
              <motion.div variants={imageVariants} className={`col-span-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                {benefit.imagen && (
                  <ImageSection style={'w-full'} src={benefit.imagen} alt={`imagen-benefit-${benefit.id}`} />
                )}
              </motion.div>

              <motion.div variants={fadeInVariants} className={`col-span-1 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                <TextSection
                  textSectionClass={`p-4 md:p-16`}
                  title={benefit.titulo}
                  classTitle={'text-white font-mouse text-center md:text-left  text-3xl md:text-5xl mb-3 md:mb-8'}
                  content={benefit.descripcion || ''}
                  listItems={benefit.beneficios?.map(b => b.descripcion) || []}
                  iconImage={CheckImage}
                  classContent="text-white my-2 flex gap-2 justify-start items-start text-center md:text-left text-md md:text-xl font-montserrat font-medium leading-loose"
                  classList={
                    'text-white my-2 flex gap-2 justify-start items-start text-left text-md md:text-xl font-montserrat font-medium leading-loose'
                  }
                />
              </motion.div>
            </Card>
          </motion.div>

        ))}
      </div>
    </section>
  );
};

export default Learned;
