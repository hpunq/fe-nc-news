import { Button, Divider } from "@fluentui/react-components";
import { useState, useEffect } from "react";
import { updateCommentVote } from "./api";
import DeleteComment from "./DeleteComment";
import DeletePopup from "./DeletePopup";

export default function CommentCard({ comment }) {
  const [concurState, setConcurState] = useState("unadded");
  const [disconcurState, setDisconcurState] = useState("unadded");
  const [votes, setVotes] = useState("");

  useEffect(() => {
    setVotes(comment.votes);
  }, [comment.votes]);

  function handleUpButtonClick() {
    if (concurState === "unadded") {
      setConcurState("added");
      incrementVote();
      setVotes(votes + 1);
    }

    if (concurState === "unadded" && disconcurState === "added") {
      setConcurState("unadded");
      setDisconcurState("unadded");
    }
  }
  function handleDownButtonClick() {
    if (disconcurState === "unadded") {
      setDisconcurState("added");
      decrementVote();
      setVotes(votes - 1);
    }
    if (concurState === "added" && disconcurState === "unadded") {
      setConcurState("unadded");
      setDisconcurState("unadded");
    }
  }

  function incrementVote() {
    const comment_id = comment.comment_id;
    updateCommentVote(1, comment_id).then((commentData) => {
      return commentData;
    });
  }

  function decrementVote() {
    const comment_id = comment.comment_id;
    updateCommentVote(-1, comment_id).then((commentData) => {
      return commentData;
    });
  }

  return (
    <>
      <li>
        <header>
          <div>
            <h3 id="username">{comment.author}:</h3>
          </div>
          <p>on {comment.created_at.slice(0, -14)}</p>
          <p>{comment.body}</p>
        </header>
        <DeletePopup comment={comment}/>
        {/* <DeleteComment comment={comment} /> */}
        <p id="vote-count">{votes} concurs</p>
        <Button
          disabledFocusable={concurState !== "unadded"}
          onClick={handleUpButtonClick}
          size="small">
          +
        </Button>
        <Button
          disabledFocusable={disconcurState !== "unadded"}
          onClick={handleDownButtonClick}
          size="small">
          -
        </Button>
        <Divider appearance="subtle" className="divider" />
      </li>
    </>
  );
}
