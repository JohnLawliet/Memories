import {POST_FETCH, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST} from './posts.type'

const INITIAL_STATE = {
    data: []
}

const postsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case POST_FETCH: 
        return {
            ...state,
            data: action.payload
        }
        case CREATE_POST: 
        return {
            ...state,
            data: [...state.data, action.payload]
        }
        case UPDATE_POST:
        case LIKE_POST:
            return{
                ...state,
                data: state.data.map(post => action.payload._id === post._id ? action.payload : post)
            }
        case DELETE_POST:
            return{
                ...state,
                data: state.data.filter(post => action.payload !== post._id )
            }
        default: return state
    }
}

export default postsReducer