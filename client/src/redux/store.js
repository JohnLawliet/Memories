import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'

const middleWare = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middleWare))

export default store