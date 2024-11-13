'use client';
import { useSearchParams } from 'next/navigation';
import Mercadopago from "@/components/common/MercadoPago";
import Yape from "@/components/common/Yape";
import Gallery from "@/components/comprar/Gallyer";
import Navbar from "@/components/ui/NavBar";
import React, { Suspense, useEffect, useState } from "react";
import Plin from '@/components/common/Plin';

function PaymentMethodComponent() {
  const searchParams = useSearchParams();
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      setPaymentMethod(type);
    }
  }, [searchParams]);

  const renderPaymentMethod = () => {
    switch (paymentMethod) {
      case 'yape':
        return <Yape />;
      case 'mercadopago':
        return <Mercadopago />;
      case 'plin':
        return <Plin />;
      default:
        return <p>Selecciona un método de pago.</p>;
    }
  };

  return <>{renderPaymentMethod()}</>;
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Cargando método de pago...</p>}>
        <PaymentMethodComponent />
      </Suspense>
      <Gallery />
    </>
  );
}
