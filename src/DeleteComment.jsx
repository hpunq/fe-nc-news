import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Button } from "@fluentui/react-components";
import { useStyles } from "./App-css";
import { deleteComment } from "./api";

export default function DeleteComment({ comment }) {
  const user = useContext(UserContext);
  const styles = useStyles();
  const [deleted, setDeleted] = useState(false);

  if (user === comment.author) {
    function handleClick() {
      deleteComment(comment.comment_id);
      setDeleted(true);
    }

    return (
      <>
        <Button
          disabled={deleted}
          appearance="small"
          className={styles.button}
          onClick={handleClick}>
          Delete Comment
        </Button>
      </>
    );
  }
}
