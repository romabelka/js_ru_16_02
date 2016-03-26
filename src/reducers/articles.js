import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, _SUCCESS } from '../actions/constants'
import { articles as defaultArticles} from '../fixtures'

const defaultState = {
    articles: [],
    loading: false,
    loaded: false
}

export default (articles = [], action) => {
    const { type, data, response } = action

    switch (type) {
        case LOAD_ALL_ARTICLES + _SUCCESS: return articles.concat(response)
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