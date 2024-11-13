import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

interface ArrowButtonProps {
  direction: 'left' | 'right'; // Indica si es la flecha izquierda o derecha
  onClick: () => void;         // Función que se llamará al hacer clic
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 shadow ${direction === 'left' ? 'left-0' : 'right-0'} text-[#14830A] bg-white rounded-full cursor-pointer`}
    >
      {direction === 'left' ? <BsArrowLeftCircle size={32} /> : <BsArrowRightCircle size={32} />}
    </div>
  );
};

export default ArrowButton;
