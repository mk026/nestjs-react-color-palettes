import { api } from "../../../app/api/axiosInstance";
import { SIGNIN_ENDPOINT_URL } from "../config";

export const signinRequest = (data: any) => api.post(SIGNIN_ENDPOINT_URL, data);
