import { FC } from "react";
import { Card, Typography } from "@mui/material";

import { IComment } from "../../types";

interface CommentProps {
  comment: IComment;
}

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <Card>
      <Typography variant="body1">{comment.content}</Typography>
    </Card>
  );
};

export default Comment;
