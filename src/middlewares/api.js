import $ from 'jquery'
import { _START, _SUCCESS, _FAIL} from '../actions/constants'

export default store => next => action => {
    const {callAPI, type, ...rest} = action
    if (!callAPI) return next(action)

    next({...rest, type: type + _START})

    $.get(callAPI)
        .done(response => next({...rest, response, type: type + _SUCCESS}))
        .fail(error => next({...rest, error, type: type + _FAIL}))
}