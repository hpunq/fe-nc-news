import { useState, useEffect } from "react";
import { getArticles } from "./api";
import {
  Card,
  CardHeader,
  CardPreview,
  Spinner,
  Caption1,
  Caption2,
  Body2,
} from "@fluentui/react-components";
import { useStyles } from "./App-css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import HashLink from "./Hashlink";
import SortBy from "./SortBy";

export default function Articles({ category }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const styles = useStyles();

  useEffect(() => {
    getArticles().then((response) => {
      if (category) {
        setArticles(
          response.articles.filter((article) => {
            return article.topic === category;
          })
        );
      } else {
        setArticles(response.articles);
      }
      setIsLoading(false);
    });
  }, [articles]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Dropdown />
      <SortBy />
      <div className={styles.center}>
        <ul className={styles.flex}>
          {articles.map((article) => {
            return (
              <li key={article.article_id}>
                <Card id="item-card" className={styles.card}>
                  <CardPreview>
                    <img
                      src={article.article_img_url}
                      alt={"image preview for " + article.title}
                    />
                  </CardPreview>
                  <Link
                    to={"/articles/" + article.article_id}
                    className={styles.text}>
                    <CardHeader
                      header={
                        <Body2>
                          <b>{article.title}</b>
                        </Body2>
                      }
                      description={
                        <Caption2>
                          <p></p>
                          {article.created_at.slice(0, -14)} // {article.author}
                        </Caption2>
                      }></CardHeader>
                  </Link>
                  <HashLink
                    styles={styles}
                    article={article}
                    category={category}
                  />
                </Card>
                {/* <p>by {article.author} // published on {article.created_at.slice(0, -14)}</p> */}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
