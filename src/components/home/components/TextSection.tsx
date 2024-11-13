import Image, { StaticImageData } from "next/image";
interface TextSectionProps {
  title?: string;
  content?: string;
  listItems?: string[];
  titleColor?: string;
  classTitle?: string;
  classContent?: string;
  classList?: string;
  textSectionClass?: string;
  iconImage?: StaticImageData | string;  // Cambiado a string si es una URL
}


const TextSection: React.FC<TextSectionProps> = ({
  title, content, listItems, classTitle, classContent, classList, textSectionClass, iconImage
}) => {
  return (
    <div className={textSectionClass}>
      <h2 className={classTitle}>{title}</h2>
      <p className={classContent}>{content}</p>
      {listItems && (
        <ul  >
          {listItems.map((item, index) => (
            <li key={index} className={classList}>

              <Image 
                  src={iconImage as StaticImageData | string}
                  alt="Imagen de check" className="mt-2" aria-label="Imagen check" /> {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextSection;
