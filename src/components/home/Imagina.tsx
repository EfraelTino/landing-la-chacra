'use client';
import { getDatas } from "@/app/utils/api";
import type { Imagina } from "@/interfaces/landingInterfaces";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Imagina: React.FC = () => {
  const [data, setData] = useState<{ imagina: Imagina[] } | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDatas('/data.json');
      setData(result);
    };

    fetchData();
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const videosRef = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = async (index: number) => {
    const video = videosRef.current[index];
    if (video) {
      try {
        video.currentTime = 0;
        await video.play();
        console.log("Video en reproducción:", index);
      } catch (error) {
        console.warn("Reproducción automática bloqueada:", error);
      }
    }
  };

  const handlePause = (index: number) => {
    const video = videosRef.current[index];
    if (video) {
      video.pause();
      console.log("Video pausado:", index);
    }
  };
  if (!data) {
    return <div>Cargando...</div>;
  }

  // Render the component
  return (
    <motion.section className="backdrop-blur-[2px] flex flex-col justify-center relative items-center py-16 z-10">
      <div className="relative z-[2] max-w-4xl w-full text-center px-2 md:px-0">
        <motion.h2
          className="font-mouse text-principal text-4xl md:text-7xl uppercase "
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeInVariants}
        >
          {data?.imagina?.[0]?.titulo}
        </motion.h2>

        <motion.p
          className="text-center font-normal  text-md md:text-lg py-4 font-montserrat"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeInVariants}
          transition={{ delay: 0.3 }}
        >
          {data?.imagina?.[0]?.descripcion}
        </motion.p>

        <div className="w-full flex justify-center mt-8">
          <motion.div
            className="h-1 w-56 bg-[#EF9956]"
            variants={fadeInVariants}
            transition={{ delay: 0.6 }}
          />
        </div>
      </div>

      <motion.div
        className="w-full max-w-5xl grid col-span-1 md:grid-cols-3 gap-8 mt-8 md:mt-16 px-4 md:px-0"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeInVariants}
      >
        {data?.imagina?.[0]?.videos.map((item, index) => (
          <div
            key={item.id}
            className={`col-span-1 ${index % 2 === 0 ? 'w-full md:w-11/12' : ''}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
          ref={(el) => {
            videosRef.current[index] = el;
          }}
              // Usamos el índice para las referencias
              width="800"
              height="450"
              loop
              controls
              playsInline
              style={{
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              }}
            >
              <source src={item.urlvideo} type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Imagina;
