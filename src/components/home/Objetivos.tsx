'use client';

import { motion } from "framer-motion";
import type { Objetivos } from "@/interfaces/landingInterfaces";
import { useEffect, useState } from "react";
import { getDatas } from "@/app/utils/api";
import ImageSection from "../common/ImageSection";

const Objetivos: React.FC = () => {
    const [data, setData] = useState<{ about: Objetivos[] } | null>(null);
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
    console.log(data?.about)
    return (
        <>
            {
                loading ? '' : 
                
                <>
                <section className="hidden-p md:flex flex-col md:flex-row w-full overflow-hidden h-[520px] z-10 relative backdrop-blur-[2px]" id="nosotros">
                    <div className="mision-container transition-all bg-principal w-full hover:w-[90%]  md:w-1/2 transform duration-500 h-full md:px-28 flex items-center overflow-hidden relative z-10 hover:bg-[#03B349] py-">
                        <motion.div className="cnt-motion flex-col flex md:flex-row w-full overflow-hidden py-20">
                            <motion.div className="text-cnt w-full">
                                <motion.h4 className="text-white font-mouse text-2xl md:text-5xl text-center text-title transition-all duration-300">
                                    {
                                        data?.about?.[0].titulo
                                    }
                                </motion.h4>
                                <motion.p className="text-white font-mouse text-lg md:text-3xl text-justify leading-normal pr-12 text-item h-0 opacity-0 transition-all duration-300">
                                    {
                                        data?.about?.[0].texto
                                    }
                                </motion.p>
                            </motion.div>
                            <motion.div className="image-item h-0 w-0 opacity-0 transition-all duration-300 overflow-hidden flex items-center">
                                <ImageSection src={data?.about?.[0].imagen} alt="Imagen Misión" style="w-full h-auto" />
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="mision-container vision transition-all bg-secundario hover:w-[90%] w-1/2 transform duration-500 h-full px-28 flex items-center overflow-hidden relative z-20 hover:bg-white hover:scale-105 ">
                        <motion.div className="cnt-motion flex w-full overflow-hidden">
                            <motion.div className="text-cnt w-full">
                                <motion.h4 className="text-white font-mouse text-5xl text-center text-title transition-all duration-300">
                                    {
                                        data?.about?.[1].titulo

                                    }
                                </motion.h4>
                                <motion.p className="text-[#663f24] font-mouse text-3xl text-justify leading-normal pr-12 text-item h-0 opacity-0 transition-all duration-300">
                                    {
                                        data?.about?.[1].texto
                                    }
                                </motion.p>
                            </motion.div>
                            <motion.div className="image-item h-0 w-0 opacity-0 transition-all duration-300 overflow-hidden flex items-center">
                                <ImageSection src={data?.about?.[1]?.imagen} alt="Imagen Visión" style="w-full h-auto" />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
                <section className="flex md:hidden flex-col md:flex-row w-full overflow-hidden z-10 relative backdrop-blur-[2px]" id="nosotros">
                    <div className=" transition-all bg-principal w-full transform duration-500 h-full md:px-28 flex items-center overflow-hidden relative z-10 hover:bg-[#03B349]">
                        <motion.div className=" flex-col flex md:flex-row w-full overflow-hidden py-20">
                            <motion.div className=" w-full">
                                <motion.h4 className="text-white font-mouse text-2xl md:text-5xl text-center text-title transition-all duration-300">
                                    {
                                        data?.about?.[0].titulo
                                    }
                                </motion.h4>
                                <motion.p className="text-white font-mouse text-lg md:text-3xl text-justify leading-normal px-4 text-item  transition-all duration-300">
                                    {
                                        data?.about?.[0].texto
                                    }
                                </motion.p>
                            </motion.div>
                            <motion.div className=" transition-all duration-300 overflow-hidden flex items-center">
                                <ImageSection src={data?.about?.[0].imagen} alt="Imagen Misión" style="w-full h-auto" />
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="transition-all   transform duration-500 h-full px-4 md:px-28 flex items-center overflow-hidden relative z-20 bg-white hover:scale-105 ">
                        <motion.div className="flex-col flex md:flex-row w-full overflow-hidden py-20">
                            <motion.div className="w-full">
                                <motion.h4 className="text-secundario font-mouse text-2xl md:text-5xl text-center text-title transition-all duration-300">
                                    {
                                        data?.about?.[1].titulo

                                    }
                                </motion.h4>
                                <motion.p className="text-[#663f24] font-mouse  text-lg md:text-3xl text-justify leading-normal  text-item      transition-all duration-300">
                                    {
                                        data?.about?.[1].texto
                                    }
                                </motion.p>
                            </motion.div>
                            <motion.div className=" transition-all duration-300 overflow-hidden flex items-center">
                                <ImageSection src={data?.about?.[1]?.imagen} alt="Imagen Visión" style="w-full h-auto" />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
                </>
            }
        </>

    );
};

export default Objetivos;
