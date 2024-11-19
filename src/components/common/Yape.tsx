'use client'
import Image from "next/image";
import YapeIcon from '@/resources/images/logo.png';
import Card from "./Card";
import Link from "next/link";
import PagoSeguro from '@/resources/images/pago-seguro.png'



const Yape: React.FC = () => {


    return (
        <section className="bg-white px-4 py-28 md:px-28 md:py-56">
            <div className="border rounded-3xl border-[#03B349E0] px-2 py-2 md:p-16 grid justify-center">
                <div className="flex justify-center mb-4"><Image
                    src={YapeIcon}
                    alt="Mercado Pago Icon"
                    width={100}
                    className="w-[50px]"
                    height={50}
                /></div>
                <Card classCard="rounded-xl bg-[#742284] p-6 max-w-lg space-y-8 shadow-lg">
                    <p className="text-white font-montserrat text-sm">Escanee nuestro QR con su aplicación Yape, o agregue nuestro número celular a sus contactos y realice su pago con Yape.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 md:col-span-1">
                            <Image src={'/images/qryape.webp'} width={100} className="w-full rounded shadow-lg" height={100} alt="Yape QR" />
                            <h4 className="text-white font-bold  font-montserrat  text-center">
                                Granja Ecológica La Chacra EIRL
                            </h4>
                        </div>
                        <div className="col-span-2 md:col-span-1 space-y-2">
                            <div className="flex justify-center">
                                <Image src={'https://i.postimg.cc/pd4ZB7SH/finalizaryape.png'} alt="Yape Icon" className="hidden-p md:flex" width={100} height={100}  />
                            </div>
                            <div className="flex flex-col items-center text-white">
                                <p className="text-white font-normal font-montserrat text-center"><strong>Empresa: </strong> La Chacra</p>
                                <p className="text-white font-normal font-montserrat text-center"><strong>Celular Yape: <br /> </strong> 993693866</p>
                            </div>
                            <Link className="bg-[#24e0c9] shadow-lg text-white font-bold font-montserrat text-center rounded-lg flex w-full justify-center py-2" href={'tel:993693866'} target="_blanck">Añadir a contacto</Link>
                        </div>
                    </div>
                    <div className="bg-contain bg-center bg-no-repeat w-full h-[40px]" style={{
                        backgroundImage: `url(${PagoSeguro.src})`
                    }}>
                   
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Yape;
