import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticlePage, updateArticleVote } from "./api";
import Comments from "./Comments";
import { Divider, Spinner, Button } from "@fluentui/react-components";

export default function ArticlePage() {
  const [newArticle, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [concurState, setConcurState] = useState("unadded");
  const [disconcurState, setDisconcurState] = useState("unadded");
  const [votes, setVotes] = useState("");

  useEffect(() => {
    getArticlePage(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
      setVotes(articleData.votes);
    });
  }, [article_id]);

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
    updateArticleVote(1, article_id).then((articleResponse) => {
      return articleResponse;
    });
  }

  function decrementVote() {
    updateArticleVote(-1, article_id).then((articleResponse) => {
      return articleResponse;
    });
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="body">
        <h2 className="sub-header-left">{newArticle.title}</h2>
        <p>
          by {newArticle.author}
          {" // "}published {newArticle.created_at.slice(0, -14)}
        </p>
        <img className="image" src={newArticle.article_img_url} alt="" />
        <p>{newArticle.body}</p>
        <div id="right-align">
          <div id="left-adjust">
            <p id="vote-count">{votes} concurs</p>
          </div>
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
        </div>
        <Divider className="divider" />
        <Comments article_id={article_id} />
      </div>
    </>
  );
}
