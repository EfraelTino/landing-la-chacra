export interface PrincipalInterface {
    id: number;
    titulo: string;
    buttonText: string;
    linkbtn: string;
}

export interface Imagina {
    id: number;
    titulo: string;
    descripcion: string;
    videos: { id: number; urlvideo: string }[];
}

export interface Benefit {
    id: number;
    titulo: string;
    imagen: string;
    descripcion: string;
    beneficios: { id: number; descripcion: string }[];
}

export interface Aprendizaje {
    id: number;
    titulo: string;
    imagen: string;
    textbtn: string;
    rutaBtn: string;
    imagen_dos:string;
    listaitems: { id: number; contenido: string }[];
}

 export  interface Taller {
    id: number;
    titulo: string;
    tallerItems: {id:number, titulo: string, fondo: string, imagen:string, contenido:string }[];
  }
  
  export interface Objetivos {
    id:number,
    titulo:string,
    imagen: string,
    texto:string,
  }
  export interface Waze {
    id:number,
    linkwaze:string,
  }