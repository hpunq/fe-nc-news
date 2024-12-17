import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticlePage } from "./api";
import Comments from "./Comments";
import { Divider } from "@fluentui/react-components";

export default function ArticlePage() {
  const [newArticle, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlePage(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <div className="body">
        <h2 className="sub-header-left">{newArticle.title}</h2>
        <p>by {newArticle.author}</p>
        <img className="image" src={newArticle.article_img_url} alt="" />
        <p>{newArticle.body}</p>
        <Divider className="divider"/>
        <Comments article_id={article_id} />
      </div>
    </>
  );
}
