import axios from "axios";

import { BASE_API_URL } from "../config";

export const api = axios.create({ baseURL: BASE_API_URL });
