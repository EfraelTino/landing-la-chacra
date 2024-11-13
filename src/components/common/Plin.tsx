import Image from "next/image";
import YapeIcon from '@/resources/images/plin.png';
import Card from "./Card";
import Link from "next/link";
import PagoSeguro from '@/resources/images/pago-seguro.png'


const Plin: React.FC = () => {


    return (
        <section className="bg-white px-28 py-56">
            <div className="border rounded-3xl border-[#03B349E0] p-16 grid justify-center">
                <div className="flex justify-center mb-4"><Image
                    src={YapeIcon}
                    alt="Mercado Pago Icon"
                    width={100}
                    height={50}
                /></div>

                <Card classCard="rounded-xl bg-plin p-6 max-w-lg space-y-8 shadow-lg">
                    <p className="text-white font-montserrat text-sm"> Escanee nuestro QR con su aplicación Plin, o agregue nuestro número celular a sus contactos y realice su pago con Plin.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1 space-y-2">
                            <Image src={'https://dquis.com/wp-content/uploads/2024/05/9b55313f-c59b-4bdc-bc03-d9212e1b0c73.jpg'} width={100} className="w-full rounded shadow-lg" height={100} alt="Yape QR"/>
                            <h4 className="text-white font-black  font-montserrat  text-center">
                                NOMBRE DE TITULAR
                            </h4>
                        </div>
                        <div className="col-span-1 space-y-2">
                            <div className="flex justify-center">
                                <Image src={YapeIcon} alt="Plin Icon" width={100} height={100} className="" />
                            </div>
                            <div className="flex flex-col items-center text-white">
                                <p className="text-white font-normal font-montserrat text-center"><strong>Empresa: </strong> La Chacra</p>
                                <p className="text-white font-normal font-montserrat text-center"><strong>Celular Yape: <br /> </strong> 987654321</p>
                            </div>
                            <Link className="bg-[#fe57d9] shadow-lg text-white font-bold font-montserrat text-center rounded-lg flex w-full justify-center py-2" href={'tel:987654321'} target="_blanck">Añadir a contacto</Link>
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

export default Plin;
