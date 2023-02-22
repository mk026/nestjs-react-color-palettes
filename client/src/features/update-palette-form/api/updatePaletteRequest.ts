import { api } from "../../../app/api/axiosInstance";
import { PALETTES_ENDPOINT_URL } from "../../../entities/palette";

export const updatePaletteRequest = (id: number, data: any) =>
  api.put(`${PALETTES_ENDPOINT_URL}/${id}`, data);
