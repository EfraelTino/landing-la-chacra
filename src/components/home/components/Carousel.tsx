import ImageSection from '@/components/common/ImageSection';
import { StaticImageData } from 'next/image';
import Slider from 'react-slick';
import ArrowButton from './ArrowButton'; // Importar el componente de flechas

interface CarouselProps {
  items: { id?: number; content?: JSX.Element, fondo?: StaticImageData | string, imagen?: StaticImageData | string, titulo?: string, contenido?: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <ArrowButton direction="left" onClick={() => {}} />, // Personaliza el evento de clic
    nextArrow: <ArrowButton direction="right" onClick={() => {}} />, // Personaliza el evento de clic
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className='relative w-[280px] md:w-[1200px]'>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="px-2">
            <div className='flex z-[2]  flex-col justify-center items-center rounded-lg px-2 py-6 md:p-6 md:py-12'
              style={{ backgroundImage: `url(${item.fondo})` }}
            >
              <ImageSection src={item.imagen} alt={'Imagen principal - La chacra'} style="w-[90%] z-[2]" />
              <h4 className='text-white font-mouse text-4xl text-center mt-6'>{item.titulo}</h4>
              <p className='text-center text-white text-md md:text-2xl'>{item.contenido}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
