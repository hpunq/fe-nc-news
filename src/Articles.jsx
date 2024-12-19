import { useState, useEffect } from "react";
import { getArticles } from "./api";
import {
  Card,
  CardHeader,
  CardFooter,
  CardPreview,
  Button,
  Spinner,
} from "@fluentui/react-components";
import { useStyles } from "./App-css";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const styles = useStyles();

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response.articles);
      setIsLoading(false);
    });
  }, [articles]);

  if (isLoading) return <Spinner/>

  return (
    <>
      <h2 className="sub-header">
        
          fetch(<div className="dropdown"><span>allArticles</span>
          <div className="dropdown-content">
            <a>#coding</a>
            <a>#cooking</a>
            <a>#football</a>
          </div>
        </div>
          )
      </h2>
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
                    <Button size="small" appearance="subtle">
                      <p>{"#" + article.topic}</p>
                    </Button>
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
