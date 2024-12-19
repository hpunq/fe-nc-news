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

export function updateCommentVote(voteValue, comment_id){
  return api.patch("/comments/" + (comment_id), {inc_votes: voteValue}).then(({data})=> {
    return data.updatedComment
  })
}

export function updateArticleVote(voteValue, article_id){
  return api.patch("/articles/" + (article_id), {inc_votes: voteValue}).then(({data})=> {
    return data.updatedArticle
  }).catch((err) => {
    console.log(err)
  })
}

export function postComment(user, body, article_id){
  return api.post("/articles/" + (article_id) + "/comments", {author: user, body: body, article_id: article_id}).then(({body: {newComment}}) => {
    return newComment
  })
}