import { useState, useEffect } from "react";
import { getArticles } from "./api";
import {
  Card,
  CardHeader,
  CardFooter,
  CardPreview,
} from "@fluentui/react-components";
import { useStyles } from "./App-css";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [selectedCard, setSelectedCard] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const styles = useStyles();

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response.articles);
      setIsLoading(false);
    });
  }, [articles]);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <h2 className="sub-header">All articles</h2>
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
                    <CardHeader header={<h3>{article.title} </h3>}></CardHeader>
                  </Link>
                  <CardFooter className={styles.footer}>
                    <Link to={"/articles/" + article.article_id}></Link>
                    <p>{"#" + article.topic}</p>
                  </CardFooter>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
