import { api } from "../../../app/api/axiosInstance";
import { SIGNIN_ENDPOINT_URL } from "../constants";

export const signinRequest = (data: any) => api.post(SIGNIN_ENDPOINT_URL, data);
