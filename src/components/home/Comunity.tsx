'use client';
import type { Aprendizaje } from "@/interfaces/landingInterfaces";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextSection from "./components/TextSection";
import CheckImage from '@/resources/images/check.png';
import { getDatas } from "@/app/utils/api";
import ImageSection from "../common/ImageSection";

const Comunity: React.FC = () => {
  const [data, setData] = useState<{ aprendizaje: Aprendizaje[] } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);


  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    },
  };
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


  const subtlePulse = {
    pulse: {
      scale: [1, 1.05, 1], // Oscilación en el tamaño
      transition: {
        repeat: Infinity,
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  };
  if (loading) {
    return <div>Cargando...</div>;
  }
  console.log(data?.aprendizaje)
  return (
    <motion.section
      className="bg-[#759C301A] backdrop-blur-[2px] flex justify-center py-12 px-4 md:px-0 relative z-10"
    >
      <div className="relative z-[2] px-0 md:px-16 w-full text-center">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Imágenes flotantes */}
          <div className=" col-span-1 md:col-span-2 relative">
            <motion.div initial="hidden"
              whileInView="visible"
              exit="hidden"
              variants={fadeInVariants}
              viewport={{ once: true, amount: 0.3 }} >
              <ImageSection style="w-full" src={data?.aprendizaje?.[0].imagen} alt="Vaca flotante" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              variants={fadeInVariants}
              viewport={{ once: true, amount: 0.4 }}
              className="absolute bottom-0 right-0 w-2/3"
            >
              <ImageSection style="w-full" src={data?.aprendizaje?.[0].imagen_dos} alt="Vaca flotante" />

            </motion.div>
          </div>

          {/* Sección de texto animado */}
          <div className="col-span-1 md:col-span-3 flex items-start flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              variants={fadeInVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <TextSection
                textSectionClass="space-y-6"
                title={data?.aprendizaje?.[0]?.titulo}
                classTitle="font-mouse text-principal text-3xl md:text-5xl text-center md:text-left"
                classList="text-[#663F24] font-montserrat text-left text-md md:text-2xl flex items-start gap-3"
                listItems={data?.aprendizaje?.[0]?.listaitems?.map(item => item.contenido) || []}

                classContent="text-white my-2 flex gap-2 justify-start items-start text-left text-md md:text-xl font-montserrat font-medium leading-loose"
                iconImage={CheckImage}
              />
            </motion.div>

            {/* Botón con animación de pulsación */}
            <div className="flex justify-center md:justify-start mt-6 w-full">
              <motion.div
                className="flex justify-start"
                variants={subtlePulse}
                animate="pulse"
              >

                <motion.a
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-principal text-white font-semibold px-6 py-3 rounded-md font-montserrat"
                  href={data?.aprendizaje?.[0]?.rutaBtn} >{
                    data?.aprendizaje?.[0]?.textbtn}</motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Movimiento suave en la esquina */}
      <motion.div
        className="absolute bottom-0 right-0"
      >
        {/* <Image src={Paste} alt="Pasto en movimiento suave" /> */}
      </motion.div>
    </motion.section>
  );
};

export default Comunity;
