import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ImageSectionProps {
    alt: string;
    src?: string | StaticImageData; // Acepta string o StaticImageData
    style?: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ alt, src, style }) => {
    return (
        <Image alt={alt} src={src as string | StaticImageData} width={100} height={60} className={style} />
    );
};

export default ImageSection;
