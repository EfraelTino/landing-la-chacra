
'use client'
import React from "react";
import WhatsAppButton from "@/components/common/WhatsappButton";
import Comunity from "@/components/home/Comunity";
import Contacto from "@/components/home/Contacto";
import Imagina from "@/components/home/Imagina";
import Learned from "@/components/home/Learned";
import Objetivos from "@/components/home/Objetivos";
import Principal from "@/components/home/Principal";
import Talleres from "@/components/home/Talleres";
import Navbar from "@/components/ui/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <Principal />
      <Imagina />
      <Learned />
      <Comunity />
      <Talleres />
      <Objetivos />
 <Contacto />
 <WhatsAppButton />
    </React.Fragment>
  );
}
