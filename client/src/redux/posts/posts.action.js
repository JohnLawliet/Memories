import {POST_FETCH, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST} from './posts.type'

export const fetchPostsAction = (post) => ({
    type: POST_FETCH,
    payload: post
})

export const createPostAction = (post) => ({
    type: CREATE_POST,
    payload: post
})

export const updatePostAction = (post) => ({
    type: UPDATE_POST,
    payload: post
})

export const deletePostAction = (id) => ({
    type: DELETE_POST,
    payload: id
})

export const likePostAction = (id) => ({
    type: LIKE_POST,
    payload: id
})