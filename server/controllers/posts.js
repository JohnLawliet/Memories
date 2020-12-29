import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req,res) => {
    try{
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    }
    catch(error) {
        res.status(400).json({ message: error.message})
    }
}

export const createPost = async (req,res) => {
    const post = req.body
    const newPost = await PostMessage(post)
    try{
        await newPost.save()
        res.status(201).json(newPost)
    }
    catch(err){
        res.status(409).json({ message: err.message})
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params
    const post = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) 
        return res.status(404).send("No post with that id")
    
    // findByIdAndUpdate may get deprecated totally
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true})
    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send("No post with that id")
    
    // findByIdAndDelete may get deprecated totally
    const deletedPost = await PostMessage.findByIdAndDelete(id)
    res.json(deletedPost.id)
}

export const likePost = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send("No post with that id")
    const post = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount : post.likeCount+1}, {new:true})
    res.json(updatedPost)
}