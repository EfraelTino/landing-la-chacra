'use client'
import Image from "next/image";
import Entorno from '@/resources/images/entorno.png';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const scrollAnimation = {
    initial: { x: '0%' },
    animate: { x: '-100%' },
    transition: {
      duration: 200,
      ease: 'linear',
      repeat: Infinity,
    },
  };

  const GalleryContent = () => (
    <div className="min-w-[90vw] inline-block space-y-4 space-x-2 mt-8">
      <div className="grid grid-cols-7 gap-2 items-end">
        <Image src={Entorno} className="col-span-1 w-full h-auto" alt="" />
        <Image src={Entorno} className="col-span-2 w-full h-auto" alt="" />
        <Image src={Entorno} className="col-span-1 w-full h-auto" alt="" />
        <Image src={Entorno} className="col-span-2 w-full h-auto" alt="" />
        <Image src={Entorno} className="col-span-1 w-full h-auto" alt="" />
      </div>
      <div className="grid grid-cols-11 gap-2 items-start">
        <Image src={Entorno} className="col-span-2 w-full h-auto" alt="" />
        <Image src={Entorno} className="col-span-3 w-full h-auto" alt="" />
        <Image src={Entorno} className="col-span-2 w-full h-auto" alt="" />
        <Image src={Entorno} className="col-span-1 w-full h-auto" alt="" />
        <Image src={Entorno} className="col-span-3 w-full h-auto" alt="" />
      </div>
    </div>
  );

  return (
    <section className="mb-20">
      <div className="relative w-full overflow-x-clip gap-2">
        <motion.div
          className="flex w-fit gap-2"
          {...scrollAnimation}
        >
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
          <GalleryContent />
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;