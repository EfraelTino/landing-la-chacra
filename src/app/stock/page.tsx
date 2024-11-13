import Navbar from "@/components/ui/NavBar";
import ShopLayout from "./layout";
import React from "react";
import Objetivos from "@/components/home/Objetivos";


export default function Home() {
  return (
   <React.Fragment>
   <Navbar/>
   <ShopLayout>
    <p>Hola</p>
   </ShopLayout>
   <Objetivos />
   </React.Fragment>
  );
}
