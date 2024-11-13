'use client'
import { SubmitHandler, useForm } from "react-hook-form"
import InputElement from "../common/InputElement"
import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import YapeIcon from '@/resources/images/yape.png';
import MercadoPagoIcon from '@/resources/images/mercadopago.webp';
import PlinIcon from '@/resources/images/plin-icon.png';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

interface Metodos {
    identidificador: string;
    image: StaticImageData;
    title: string;
}
type FormInputs = {
    name: string,
    lastname: string,
    documentType: string,
    numberdoc: string,
    phone: number,
    email: string,
    quantityadult: string,
    quantitychild: string,
    dateVisit: string
    schedule: string
    paymentMethod: string
}

const Formulario: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true); // Aseguramos que el componente esté montado antes de usar router
    }, []);
    const router = useRouter();
    const metodoPago: Metodos[] = [

        {
            identidificador: "yape",
            image: YapeIcon,
            title: "Yape"

        },
        {
            identidificador: "mercadopago",
            image: MercadoPagoIcon,
            title: "Mercadopago"

        },
        {
            identidificador: "plin",
            image: PlinIcon,
            title: "Plin"

        },
    ]
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormInputs>();

    //realizamos en elnvio
    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        if (!isMounted) return; // Evitar usar router si no está montado
        console.log('se enviarán', data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        router.push(`/pagar?type=${data.paymentMethod}`);
    };

    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    };
    return (
        <section className="bg-white  px-4 md:px-28 pt-28 pb-12  md:pb-0 md:py-56">
            <form onSubmit={handleSubmit(onSubmit)} className="border rounded-3xl border-[#03B349E0] p-4 md:p-16  flex flex-col items-center justify-center">
                <motion.h1
                    className="font-mouse text-[#03B349E0] text-center text-4xl md:text-6xl"
                    variants={fadeInVariants}
                >
                    ¡Reservemos tu entrada!
                </motion.h1>
                <div className="md:grid flex flex-col md:grid-cols-2 gap-4 mt-12 justify-center md:max-w-3xl">
                    {/* Nombres */}
                    <div className="">
                        <InputElement
                            id="name"
                            label="Nombres"
                            type="text"
                            labelClass="font-semibold"
                            placeholder='Ingresa tus nombres'
                            classinput=''
                            register={register('name', {
                                required: 'Ingresa tu nombre',
                                minLength: {
                                    value: 1,
                                    message: 'Ingresa correctamente tu nombre',
                                },
                            })}
                            error={errors.name}
                        />

                    </div>
                    {/* Apellido */}
                    <div className="col-span-1">
                        <InputElement
                            id="lastname"
                            label="Apellidos"
                            type="text"
                            placeholder='Ingresa tus apellidos'
                            register={register('lastname', {
                                required: 'Ingresa tu apellido',
                                minLength: {
                                    value: 1,
                                    message: 'Ingresa correctamente tu Apellido',
                                },
                            })}
                            error={errors.lastname}
                        />
                    </div>
                    {/* Tipo de Documento */}
                    <div>
                        <label htmlFor="documentType" className="text-[#03B349E0] font-bold text-lg font-montserrat">Tipo de Documento:</label>
                        <select
                            id="documentType"
                            {...register('documentType', { required: 'El tipo de documento es requerido' })}
                            className={`
                            bg-[#EEEEEE] rounded transition-colors px-2 py-2 font-montserrat
                            focus:outline-none focus:ring-2 focus:ring-[#03B349E0]  focus:border-[#03b34962]
                            hover:border-[#03B349E0] active:border-[#03B349] w-full font-raleway appearance-none
                          `}
                        >
                            <option value="" className="py-5">Seleccione...</option>
                            <option value="DNI">DNI</option>
                            <option value="Pasaporte">Pasaporte</option>
                            <option value="Carné de Extranjería">Carné de Extranjería</option>
                        </select>
                        {errors.documentType && <p className="text-red-500 text-[10px] font-light">{errors.documentType.message}</p>}
                    </div>
                    {/* Número de Documento */}
                    <div >
                        <InputElement
                            id="numberdoc"
                            label="N° de documento"
                            type="text"
                            placeholder='Ingresa tu número de documento'
                            register={register('numberdoc', {
                                required: 'Tu documento de identidad es necesario',
                                minLength: {
                                    value: 4,
                                    message: 'Ingresa correctamente tu documento de identidad',
                                },
                            })}
                            error={errors.numberdoc}
                        />
                    </div>

                    <div>
                        <InputElement
                            id="phone"
                            label="Celular: "
                            type="number"
                            placeholder="Ingresa tu N° de celular"
                            register={register('phone', {
                                required: 'Ingresa tu número de celular',
                                pattern: {
                                    value: /^[0-9]{9,9}$/,
                                    message: 'Este campo es obligatorio',
                                },
                            })}
                            error={errors.phone}
                        />
                    </div>
                    {/* Email */}
                    <div>
                        <InputElement
                            id="email"
                            label="Correo electrónico: *"
                            type="email"
                            placeholder="Ingresa tu corre electrónico"
                            register={register('email', {
                                required: 'Ingresa tu correo electrónico',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Este campo es obligatorio',
                                },
                            })}
                            error={errors.email}
                        />
                    </div>
                    {/* Celular */}
                    {/* Adultos */}
                    <div>
                        <InputElement
                            id="quantityadult"
                            label="¿Cuántos adultos?"
                            type="number"
                            placeholder="N° de adultos"
                            register={register('quantityadult', {
                                required: 'Ingresa la cantidad de adultos',
                                minLength: {
                                    value: 0,
                                    message: 'Especifica la cantidad de adultos que nos visitará',
                                },
                            })}
                            error={errors.quantityadult}
                        />
                    </div>
                    {/* Niños */}
                    <div>
                        <InputElement
                            id="quantitychild"
                            label="Nro. Niños (hasta 10 años):"
                            type="number"
                            placeholder="N° de niños"
                            register={register('quantitychild', {
                                required: 'Ingresa la cantidad de niños',
                                minLength: {
                                    value: 0,
                                    message: 'Especifica la cantidad de niños que nos visitará',
                                },
                            })}
                            error={errors.quantitychild}
                        />
                    </div>
                    {/* Fecha de Nacimiento */}
                    <div>
                        <label htmlFor="dateVisit" className="text-[#03B349E0] font-bold font-montserrat text-lg">¿Qué fecha?</label>
                        <input
                            id="dateVisit"
                            type="date"
                            className={`
                            bg-[#EEEEEE] rounded px-2 py-2  transition-colors 
                            focus:outline-none focus:ring-2 focus:ring-[#03B349E0]  focus:border-[#03b34962]
                            hover:border-[#03B349E0] active:border-[#03B349] w-full appearance-none
                          `}
                            {...register('dateVisit', {
                                required: 'Ingresa una fecha de visita',
                                validate: (value) => {
                                    const selectedDate = new Date(value);
                                    const today = new Date();
                                    if (selectedDate <= today) {
                                        return 'La fecha de viista debe ser a futuro';
                                    }
                                },
                            })}
                        />
                        {errors.dateVisit && <p className="text-red-500 text-[10px] font-light">{errors.dateVisit.message}</p>}
                    </div>
                    {/* Horario */}
                    <div>
                        <InputElement
                            id="schedule"
                            label="¿Qué horario?"
                            type="text"
                            placeholder="Ejemplo: 10:00"
                            register={register('schedule', {
                                required: 'Ingresa un horario',
                            })}
                            error={errors.schedule}
                        />
                    </div>
                    {/* Términos y condiciones */}
                    <div className="flex items-start gap-1 cursor-pointer">
                        <input
                            type="checkbox"
                            name="terminos"
                            id="terminos"
                            className={`
          h-5 w-5 rounded accent-[#03B349E0]
          focus:ring-[#03B349E0] mt-1
        `}
                            required
                        />
                        <label htmlFor="terminos" className="text-gray-700 cursor-pointer font-montserrat  font-semibold">
                            Acepto los{' '}
                            <Link href="/terminos" className="text-[#03B349E0] cursor-pointer">
                                términos <span className="text-black">y</span> condiciones
                            </Link>
                        </label>
                    </div>
                    <div className="col-span-1 grid grid-cols-6 gap-2">
                        {metodoPago.map((item) => (
                            <div key={item.identidificador} className="col-span-2 flex items-start gap-1 w-full">
                                <input
                                    type="radio"
                                    id={item.identidificador}
                                    value={item.identidificador}
                                    {...register('paymentMethod', { required: 'Por favor selecciona un método de pago' })}
                                />
                                <label htmlFor={item.identidificador}>
                                    <Image className="w-full" src={item.image} alt={item.title} width={100} height={20} />
                                </label>
                            </div>
                        ))}
                    {errors.paymentMethod && <p className="text-red-500 text-[10px] font-light col-span-6">{errors.paymentMethod.message}</p>}
                    </div>


                    <div className="col-span-2 flex justify-center mt-8">
                        {/* Botón de Enviar */}
                        <button type="submit" disabled={isSubmitting} className="bg-[#03B349E0] text-white py-2 px-10 md:px-28 rounded-lg cursor-pointer text-lg md:text-xl hover:bg-green-600 transition-all font-montserrat font-bold">
                            {isSubmitting ? 'Cargando...' : 'Realizar pago'}
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
}
export default Formulario;