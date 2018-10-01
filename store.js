import { createStore, combineReducers, applyMiddleware } from 'redux'
import modalReducer from './reducers/modalReducer'
import assetReducer from './reducers/assetReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    assetReducer,
    modalReducer
})

const store = createStore (
    reducer,
    applyMiddleware(thunk)
)

export default store