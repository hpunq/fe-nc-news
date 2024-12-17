import { useState, useEffect } from "react";
import { getComments } from "./api";

export default function Comments(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(props.article_id).then((commentData) => {
      setComments(commentData);
    });
  }, [props.article_id]);

  return (
    <>
      <h2 className="sub-header-left">Comments</h2>
      <ul className="comments">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <header>
                <h3>{comment.author}:</h3>
                <p>{comment.body}</p>
              </header>
            </li>
          );
        })}
      </ul>
    </>
  );
}
