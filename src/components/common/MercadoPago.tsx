import Image from "next/image";
import MercadoPagoIcon from '@/resources/images/mercadopago.webp';



{/*interface Pago {
    id: number;
    title: string;
    text: string;
*/}

const Mercadopago: React.FC = () => {
   { /*
    const dataPago: Pago[] = [
        {
            id: 1,
            title: 'Tarjeta de crédito',
            text: 'Cuotas sin intereses',
        },
        {
            id: 2,
            title: 'Tarjeta de débito',
            text: 'Cuotas sin intereses',
        },
    ];
   */}

    return (
        <section className="bg-white px-28 py-56">
            <div className="border rounded-3xl border-[#03B349E0] p-16 grid justify-center">
                <div className="flex justify-center"><Image
                    src={MercadoPagoIcon}
                    alt="Mercado Pago Icon"
                    width={200}
                    height={50}
                /></div>
                <h1 className="font-montserrat font-bold text-center text-xl mt-6">
                    Medios de pago
                </h1>
               {/* <form className="max-w-2xl w-full space-y-4">

                    <ul className="mt-4 space-y-4">
                        {dataPago.map((pago) => (
                            <li key={pago.id} className="border rounded-lg border-[#03B349] p-4 hover:bg-[#EEEEEE] flex items-center px-8">
                                <input type="radio" id={`pago-${pago.id}`} className="mr-2" />
                                <label htmlFor={`pago-${pago.id}`} className="flex items-center gap-4">
                                    <span className="border rounded-full p-1 border-[#03B349]"><TbCreditCard className="text-xl text-[#03B349]" /></span>

                                    <div>
                                        <h2 className="font-bold text-[#03B349] font-montserrat">{pago.title}</h2>
                                        <p className="text-sm text-[#8E8B8C] font-montserrat">{pago.text}</p>
                                    </div>
                                </label>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <InputElement
                            label="Número de tarjeta"
                            classinput="border border-[#03B349] rounded-lg bg-white font-montserrat placeholder:text-[#8E8B8C] font-bold"
                            placeholder="1234 1234 1234 1234"
                            labelClass="text-black"
                            type="number"
                            id="numerotarjeta"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <InputElement
                        register={''}
                            label="Vencimiento"
                            classinput="border border-[#03B349] rounded-lg bg-white font-montserrat placeholder:text-[#8E8B8C] font-bold"
                            placeholder="MM/AA"
                            labelClass="text-black"
                            id="vencimiento"
                        />
                        <div className="relative">
                            <InputElement
                                label="Código de seguridad"
                                classinput="border border-[#03B349] rounded-lg bg-white font-montserrat placeholder:text-[#8E8B8C] font-bold"
                                placeholder="123"
                                type="number"
                                labelClass="text-black"
                                id="seguridad"
                            />
                            <TbCreditCard className="text-xl text-black absolute  bottom-3 right-3" />
                        </div>

                    </div>
                    <div>
                        <InputElement
                            label="Nombre del titular como aparece en la tarjeta"
                            classinput="border border-[#03B349] rounded-lg bg-white font-montserrat placeholder:text-[#8E8B8C] font-bold"
                            type="text"
                            labelClass="text-black"
                            id="nombretitular"
                        />
                    </div>
                    <div>
                        <InputElement
                            label="Número de documento del titular"
                            classinput="border border-[#03B349] rounded-lg bg-white font-montserrat placeholder:text-[#8E8B8C] font-bold"
                            type="number"
                            labelClass="text-black"
                            id="documento"
                        />
                    </div>
                    <div className="col-span-2 flex justify-center mt-8">
                        <button type="submit"  className="bg-[#03B349E0] text-white py-4 px-28 rounded-lg cursor-pointer text-xl hover:bg-green-600 transition-all font-raleway font-bold">
                            Realizar pago
                        </button>
                    </div>
                </form>
 */}
            </div>
        </section>
    );
};

export default Mercadopago;
