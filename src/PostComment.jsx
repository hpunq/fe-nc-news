import { Button, Card, CardFooter, Textarea } from "@fluentui/react-components";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { useStyles } from "./App-css";
import { postComment } from "./api";

export default function PostComment() {
  const styles = useStyles();
  const user = useContext(UserContext);
  const params = useParams();
  const articleId = params.article_id;
  const [formInput, setFormInput] = useState("");

  function handleChange(e) {
    setFormInput(e.target.value);
  }

  function handleSubmit() {
    postComment(user, formInput, articleId).then(() => {});
    setFormInput("");
  }
  return (
    <>
      <p>
        You are logged in as <b>{user}</b>
      </p>
      <Card size="small" appearance="filled-alternative">
        <Textarea
          value={formInput}
          onChange={handleChange}
          appearance="underline"
          placeholder="Say something controversial..."
        />
        <CardFooter>
          <Button className={styles.button} onClick={handleSubmit} disabled={formInput === ""}>
            Post
          </Button>
        </CardFooter>
      </Card>
      <header></header>
    </>
  );
}
