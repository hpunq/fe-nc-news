import { Button, Card, CardFooter, Textarea } from "@fluentui/react-components";
import { postComment } from "./api";

export default function PostComment() {

  return (
    <>
      <p>
        You are logged in as <b>J-Dog1999</b>
      </p>
      <Card size="small" appearance="filled-alternative">
        <Textarea
          appearance="underline"
          placeholder="Say something controversial..."
        />
        <CardFooter>
          <Button>Post</Button>
        </CardFooter>
      </Card>
      <header></header>
    </>
  );
}
