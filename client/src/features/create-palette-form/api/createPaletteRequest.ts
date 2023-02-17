import { api } from "../../../app/api/axiosInstance";
import { PALETTES_ENDPOINT_URL } from "../../../entities/palette";

export const createPaletteRequest = (data: any) =>
  api.post(PALETTES_ENDPOINT_URL, data);
