import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducers'
//import logger from '../middlewares/logger'
import createLogger from 'redux-logger'
import multi from 'redux-multi'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import DevTools from '../containers/DevTools'

const logger = createLogger()
const enhancer = compose(
    applyMiddleware(multi, randomId, api, logger),
    DevTools.instrument()
)

const store = createStore(reducer, {}, enhancer)

window.store = store

if (module.hot) {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers').default)
    );
}

export default store