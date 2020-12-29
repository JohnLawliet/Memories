import {fetchPosts, createPost, updatePost, deletePost, likePost} from '../api/getData'
import {fetchPostsAction, createPostAction, updatePostAction, deletePostAction, likePostAction} from './posts/posts.action'

// redux thunk
export const fetchPostsCreator = () => async dispatch => {
    try{
        const {data} = await fetchPosts()
        dispatch(fetchPostsAction(data))      
    }
    catch(err){
        console.log("BRUU : ",err)
    }
}

export const createPostCreator = (post) => async dispatch => {
    try{
        const {data} = await createPost(post)
        dispatch(createPostAction(data))
    }
    catch(err){
        console.log("POST CREATION ERR : ",err)
    }
}

export const updatePostCreator = (id, post) => async dispatch => {
    try{
        const {data} = await updatePost(id, post)
        dispatch(updatePostAction(data))
    }
    catch(err){
        console.log("POST UPDATE ERR : ",err)
    }
}

export const deletePostCreator = (id) => async dispatch => {
    try{
        const {data} = await deletePost(id)
        dispatch(deletePostAction(data))
    }
    catch(err){
        console.log("ERROR IN DELETION : ",err)
    }
}

export const likePostCreator = (id) => async dispatch => {
    try{
        const {data} = await likePost(id)
        dispatch(likePostAction(data))
    }
    catch(err){
        console.log("COULDN'T BE LIKED : ",err)
    }
}

