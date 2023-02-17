import { FC } from "react";
import { Stack } from "@mui/material";

import { IComment } from "../../types";
import Comment from "../comment";

interface CommentsListProps {
  comments: IComment[];
}

const CommentsList: FC<CommentsListProps> = ({ comments }) => {
  return (
    <Stack>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </Stack>
  );
};

export default CommentsList;
