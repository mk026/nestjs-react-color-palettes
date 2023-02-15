import { api } from "../../../app/api/axiosInstance";
import { SIGNUP_ENDPOINT_URL } from "../config";

export const signupRequest = (data: any) => api.post(SIGNUP_ENDPOINT_URL, data);
