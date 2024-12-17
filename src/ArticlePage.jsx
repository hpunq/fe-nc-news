import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticlePage } from "./api";

export default function ArticlePage(){
  const [newArticle, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticlePage(article_id).then((articleData) => {
      setArticle(articleData);
    });
  }, []);

  return (
    <>
      {console.log(newArticle)}
      <h2>{newArticle.title}</h2>
      <img src={newArticle.article_img_url} alt="" />
      <p>{newArticle.body}</p>
    </>
  );
}
