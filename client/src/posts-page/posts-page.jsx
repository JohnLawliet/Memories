import React from 'react'
import Post from '../post/post'
import {useSelector} from 'react-redux'

import useStyles from './styles'
import { CircularProgress, Grid } from '@material-ui/core'

const PostsPage = ({ setCurrentId }) => {
    const classes= useStyles()
    const data = useSelector(state => state.posts.data)
    console.log("posts : ",data)
    
    return(
        !data.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {data.map((post) => {
                        return (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    )}
                )}
            </Grid>
        )
    )
}

export default PostsPage