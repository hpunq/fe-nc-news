import { useState, useEffect } from "react";
import { getComments } from "./api";
import PostComment from "./PostComment";
import CommentCard from "./CommentCard";

export default function Comments(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(props.article_id).then((commentData) => {
      setComments(commentData);
    });
  }, [comments]);

  return (
    <>
      <h2 className="sub-header-left">Comments</h2>
      <PostComment />
      <ul className="comments">
        {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </>
  );
}
