import { api } from "../../../app/api/axiosInstance";
import { COLLECTIONS_ENDPOINT_URL } from "../../../entities/collection";

export const createCollectionRequest = (data: any) =>
  api.post(COLLECTIONS_ENDPOINT_URL, data);
