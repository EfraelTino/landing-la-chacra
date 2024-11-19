'use client'
import Image from "next/image";
import Link from "next/link";
import CheckImage from '@/resources/images/checkicon.png';
import WazeIcon from '@/resources/images/waze-icon.png';
import { FiPhoneCall } from "react-icons/fi";
import Foro from '@/resources/images/foro.png';
import { useEffect, useState } from "react";
import { getDatas } from "@/app/utils/api";
import type { Waze } from "@/interfaces/landingInterfaces";
const Contacto: React.FC = () => {
    const [data, setData] = useState    <{
        waze: Waze[];
    } | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await getDatas('/data.json');
            console.log(result)
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <>
        <section className="flex justify-center bg-principal relative items-center mt-28 backdrop-blur-[2px] z-10" id="contacto">
            <div className="max-w-5xl w-full py-4 md:py-2 ">
                <div className="grid grid-cols-1 md:grid-cols-8 items-center w-full  justify-center space-y-4 md:space-y-0">
                    <h3 className="col-span-1 md:col-span-2 font-mouse uppercase gap-2 justify-center md:justify-start   text-white flex items-center text-5xl">CONTACTO <Image src={CheckImage} alt="check" width={40} height={40} /> </h3>
                    <div className="col-span-1 md:col-span-4 flex flex-col md:flex-row items-center justify-between">
                        <p className="text-white font-semibold text-base font-montserrat">La Chacra Granja Ecológica</p>
                        <Link className="text-white font-semibold  flex items-center gap-2 font-montserrat text-lg" href={'tel:'}><FiPhoneCall className="text-lg"/> 993 693 866</Link>
                    </div>
                    <div className="col-span-1 md:col-span-2 flex justify-center md:justify-end">
                        <Link href={`${data?.waze?.[0]?.linkwaze}`} className="bg-[#7CCDFD] flex items-center rounded-lg px-4 py-2 text-white font-semibold gap-1 font-montserrat">
                        <Image src={WazeIcon} alt="icon-waze" className="w-6"/>

                            Link WAZE
                        </Link>
                    </div>
                </div>
            </div>
        
        </section>
        <section>
        <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31208.907916779313!2d-77.042793!3d-12.046374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c83e28585565%3A0x4ad752e285ae0442!2sPlaza%20Mayor%20de%20Lima!5e0!3m2!1ses-419!2spe!4v1729110020444!5m2!1ses-419!2spe" 
    className="w-full relative z-10" 
    width="600" 
    height="450" 
    allowFullScreen
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
</iframe>

        </section>
        <section className="bg-[#663F24] flex justify-center relative z-10">
            <Image src={Foro} alt="Foro footer" className="absolute -mt-3 md:-top-0 left-0 right-0 w-full h-5 "/>  
            <div className="max-w-[90%] flex flex-col  md:flex-row justify-center md:justify-between w-full py-8">
            <p className="text-white text-sm  text-center md:text-start md:text-base font-montserrat">
            2024 <strong>LA CHACRA</strong>. All rights reserved
            </p>
            <p className="text-white text-center md:text-start text-sm md:text-base font-montserrat">
            Diseñado y desarrollado por <Link href={''} className="text-white text-sm md:text-base font-montserrat">Resow Solutions SAC</Link>
            </p>
            </div>
        </section>
        </>
    );
}

export default Contacto;