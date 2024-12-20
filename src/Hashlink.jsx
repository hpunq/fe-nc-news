import { Button, CardFooter } from "@fluentui/react-components";
import { Link } from "react-router-dom";

export default function HashLink({ styles, article, category }) {
  if (article.topic !== category) {
    return (
      <CardFooter className={styles.footer}>
        <Button size="small" appearance="subtle">
          <Link className={styles.text} to={"/" + article.topic}>
            {"#" + article.topic}
          </Link>
        </Button>
      </CardFooter>
    );
  } else
    return (
      <>
        <CardFooter className={styles.footer}>
          <Button
            className={styles.hashButton}
            size="small"
            appearance="subtle">
            <p id="vote-count">{article.votes} concurs</p>
          </Button>
        </CardFooter>
      </>
    );
}
