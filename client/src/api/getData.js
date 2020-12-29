import axios from 'axios'

const url = "http://localhost:5000/posts"

export const fetchPosts = () => axios.get(url)

// Retrieves newly created data
export const createPost = (newPost) => axios.post(url, newPost)

// Retrieves updated data
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)

// Delete data
export const deletePost = (id) => axios.delete(`${url}/${id}`)

// Like data
export const likePost = (id) => axios.patch(`${url}/${id}/likepost`)