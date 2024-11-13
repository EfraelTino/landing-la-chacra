'use client';
import { motion } from "framer-motion";
import bgPrincipal from '@/resources/images/bgPrincipal.png';
import { PrincipalInterface } from "@/interfaces/landingInterfaces";
import { useEffect, useState } from "react";
import { getDatas } from "@/app/utils/api";

export default function Principal() {
    const [data, setData] = useState<{
        principal: PrincipalInterface[];
    } | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            const result = await getDatas('/data.json');
            console.log(result)
            setData(result);
        };

        fetchData();
    }, []);
    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1, backgroundColor: "#4caf50", transition: { duration: 0.4 } },
        tap: { scale: 0.95 },
        pulse: {
            scale: [1, 1.02, 1],
            transition: { repeat: Infinity, duration: 1, ease: "easeInOut" },
        },
    };

    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    };
    if (!data) {
        return <div>Cargando...</div>;
    }
    return (
        <motion.section
            className="bg-black flex justify-center items-center relative h-[680px] bg-cover bg-center bg-no-repeat z-10"
            style={{ backgroundImage: `url(${bgPrincipal.src})` }}

        >
            <div className="bg-[#202020] bg-opacity-50 absolute top-0 bottom-0 right-0 left-0 w-full h-full z-[1]" ></div>
            {data.principal.map((item) => (
                <div key={item.id} className="relative z-[2] max-w-4xl mt-24 px-2 md:p-0">
                    <motion.h1
                        className="font-mouse text-white text-center text-4xl md:text-7xl uppercase"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={fadeInVariants}
                    >
                        {item.titulo}
                    </motion.h1>
                    <div className="flex justify-center mt-8">
                        <motion.div
                            className="flex justify-start mt-6"
                            variants={buttonVariants}
                            initial="initial"
                            animate="pulse"
                        >

                            <motion.a
                                whileHover="hover"
                                whileTap="tap"
                                className="bg-principal text-white font-inter font-[600] rounded-lg font-montserrat py-2 px-12 border-principal hover:bg-white  border-2 hover:text-principal hover:border-2 text-xl md:text-2xl"
                                href={item.linkbtn} >{
                                    item.buttonText}</motion.a>
                        </motion.div>
                    </div>
                </div>
            ))}
        </motion.section>
    );
}
