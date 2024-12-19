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
  })
}

export function postComment(user, body, article_id){
  const comment = {username: user, body: body}

  return api.post("/articles/" + (article_id) + "/comments", comment).then(({data}) => {
    return data.newComment
  })
}

export function deleteComment(comment_id){
  return api.delete("/comments/" + (comment_id)).then(({data}) => {
    console.log(data)
    return data
  }).catch((err) => {
    console.log(err)
  })
}