import { api } from "../../../app/api/axiosInstance";
import { COMMENTS_ENDPOINT_URL } from "../../../entities/comment";

export const addCommentRequest = (data: any) =>
  api.post(COMMENTS_ENDPOINT_URL, data);
