import axios from "axios";
import { Personaje } from "./listado-personaje.model";

const urlApi: string = "http://localhost:3000/personajes";

export const obtenerPersonajes = async (): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get(urlApi);
    return data;
  } catch (error) {
    throw new Error("Error al obtener los personajes");
  }
};

export const obtenerPersonajeFiltrado = async (
  nommbrePersonaje: string
): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get(
      `${urlApi}?nombre_like=${nommbrePersonaje}`
    );
    return data;
  } catch (error) {
    throw new Error("Error al obtener al personaje");
  }
};
