import axios from "axios";

export const getDatas = async (url: string) => {
  try {
    const response = await axios.get(url);

    return response.data; 
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
};
