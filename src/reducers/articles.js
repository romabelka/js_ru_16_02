import { DELETE_ARTICLE, ADD_COMMENT } from '../actions/constants'
import { articles as defaultArticles} from '../fixtures'

export default (articles = defaultArticles, action) => {
    const { type, data } = action

    switch (type) {
        case DELETE_ARTICLE: return articles.filter((article) => article.id != data.id)
        case ADD_COMMENT: return addComment(articles, data.articleId, action.randomId)
    }

    return articles
}

function addComment(articles, articleId, commentId) {
    return articles.map((article) => {
        return article.id == articleId ? Object.assign({}, article, {comments: article.comments.concat(commentId)}) : article
    })
}