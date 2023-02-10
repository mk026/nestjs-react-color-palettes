import { api } from "../../../utils/axiosInstance";
import { SIGNUP_ENDPOINT_URL } from "../constants";

export const signupRequest = (data: any) => api.post(SIGNUP_ENDPOINT_URL, data);
