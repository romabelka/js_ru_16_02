import {comments as defaultComents} from '../fixtures'
import { ADD_COMMENT } from '../actions/constants'

export default (comments = defaultComents, action) => {
    const { type, data } = action

    switch (type) {
        case ADD_COMMENT: return comments.concat({id: action.randomId, text: data.text})
    }

    return comments
}