import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-api-bh.onrender.com/api",
});

export function getArticles() {
  return api.get("/articles").then(({ data }) => {
    return data;
  });
}

export function getArticlePage(article_id) {
  return api.get("/articles/" + (article_id)).then(({ data }) => {
    return data.article;
  })
}

export function getComments(article_id) {
    return api.get("/articles/" + (article_id) + "/comments").then(({ data }) => {
      return data.comments
    })
  }