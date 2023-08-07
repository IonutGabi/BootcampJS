import axios from "axios";
import { Personaje } from "./listado-personaje.model";

export const obtenerPersonajes = async (): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get("http://localhost:3000/personajes");
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
      `http://localhost:3000/personajes?nombre_like=${nommbrePersonaje}`
    );
    return data;
  } catch (error) {
    throw new Error("Error al obtener al personaje");
  }
};
