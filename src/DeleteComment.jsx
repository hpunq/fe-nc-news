import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Button } from "@fluentui/react-components";
import { useStyles } from "./App-css";
import { deleteComment } from "./api";

export default function DeleteComment({ comment }) {
  const styles = useStyles();
  const [deleted, setDeleted] = useState(false);

  function handleClick() {
    deleteComment(comment.comment_id);
    setDeleted(true);
  }
  
  return (
    <>
      <Button
        disabled={deleted}
        appearance="small"
        className={styles.deleteButton}
        onClick={handleClick}>
        delete!
      </Button>
    </>
  );
}
