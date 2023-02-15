import { api } from "../../../app/api/axiosInstance";
import { CREATE_COLLECTION_ENDPOINT_URL } from "../constants";

export const createCollectionRequest = (data: any) =>
  api.post(CREATE_COLLECTION_ENDPOINT_URL, data);
