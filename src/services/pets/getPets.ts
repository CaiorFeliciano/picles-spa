import { GetPetsRequest, GetPetsResponse } from "../../interfaces/pet/pet";
import httpClient from "../api/httpClient";

export async function getPets(
  params?: GetPetsRequest
): Promise<GetPetsResponse> {
  try {
    const { data } = await httpClient.get("/pet", { params });
    return data;
  } catch (error) {
    console.log("Erro ao buscar pets:", error);
    throw error;
  }
}