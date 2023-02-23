import { api } from "../../../app/api/axiosInstance";
import { COMMENTS_ENDPOINT_URL } from "../../../entities/comment";

export const updateCommentRequest = (id: number, data: any) =>
  api.put(`${COMMENTS_ENDPOINT_URL}/${id}`, data);
