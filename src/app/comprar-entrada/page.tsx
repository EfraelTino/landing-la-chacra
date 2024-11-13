

import Formulario from "@/components/comprar/Formulario";
import Gallery from "@/components/comprar/Gallyer";
import Contacto from "@/components/home/Contacto";
import Navbar from "@/components/ui/NavBar";
import React from "react";

export default function HomePage() {
    return (
     <React.Fragment>
      <Navbar />
        <Formulario />
        <Gallery />
      <Contacto />

     </React.Fragment>
    );
  }
  