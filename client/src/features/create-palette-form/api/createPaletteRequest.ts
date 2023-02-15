import { api } from "../../../app/api/axiosInstance";
import { CREATE_PALETTE_ENDPOINT_URL } from "../constants";

export const createPaletteRequest = (data: any) =>
  api.post(CREATE_PALETTE_ENDPOINT_URL, data);
