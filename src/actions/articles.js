import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, _START, _SUCCESS, _FAIL } from './constants'
import $ from 'jquery'

export function deleteArticle(id) {
    return [{
        type: DELETE_ARTICLE,
        data: { id }
    },
    {
        type: 'HELLO_WORLD_ACTION'
    }
    ]
}

/*
export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

*/

export function loadAllArticles() {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_ALL_ARTICLES + _START
        })

        $.get('/api/article')
            .done(response => dispatch({ type: LOAD_ALL_ARTICLES + _SUCCESS, response}))
            .fail(error => dispatch({ type: LOAD_ALL_ARTICLES + _FAIL, error}))

    }
}
