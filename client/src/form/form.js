import React, {useEffect, useState} from 'react'
import { Paper, Button, Typography, TextField} from '@material-ui/core'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux'
import {createPostCreator, updatePostCreator} from '../redux/action.creator'
import useStyles from './styles'
import {useSelector} from 'react-redux'



const Form = ({ currentId, setCurrentId }) => {
    const classes= useStyles()
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const dispatch = useDispatch()
    const post = useSelector(state => currentId? state.posts.data.find(post => post._id === currentId) : null) 

    useEffect(() => {
        if (post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(currentId)
            dispatch(updatePostCreator(currentId, postData))
        else
            dispatch(createPostCreator(postData))
        clear()
    }

    const handleChange = (e) => {
        let {name, value} = e.target
        if (name==='tags')
            value = value.split(',')            
        setPostData({ ...postData, [name]: value})
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId? 'Editing' : 'Creating'} a Memory</Typography>
            <TextField 
                name="creator" variant="outlined" label="Creator" fullWidth 
                value={postData.creator} onChange={e => handleChange(e)}
            />
            <TextField 
                name="title" variant="outlined" label="Title" fullWidth required
                value={postData.title} onChange={e => handleChange(e)}
            />
            <TextField 
                name="message" variant="outlined" label="Message" fullWidth  multiline
                value={postData.message} onChange={e => handleChange(e)}
            />
            <TextField 
                name="tags" variant="outlined" label="tags" fullWidth multiline
                value={postData.tags} onChange={e => handleChange(e)}
            />

            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64  })  }/>
            </div>

            <Button 
                className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth
            >Submit</Button>
            <Button 
                variant="contained" color="secondary" size="large" onClick={clear} fullWidth
            >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form