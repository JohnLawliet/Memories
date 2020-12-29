import React from 'react'
import useStyles from './styles'
import {Card, CardActions, CardMedia, CardContent, Button, Typography, } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {deletePostCreator, likePostCreator} from '../redux/action.creator'


const Post = ({ post, setCurrentId }) => {
    const classes= useStyles()
    const dispatch = useDispatch()
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.craetedAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)} >
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags ? post.tags.map(tag => `#${tag} `) : null}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography className={classes.message} variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <div className={classes.footer}>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" 
                        onClick={() => 
                            {
                                dispatch(likePostCreator(post._id))
                            } 
                    }>
                        <ThumbUpAltIcon fontSize="small" />
                        Like&nbsp;{post.likeCount}
                        
                    </Button>
                    <Button size="small" color="primary" 
                        onClick={() => 
                            {   
                                dispatch(deletePostCreator(post._id))
                            }
                        }>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                </CardActions>  
            </div>
                     
        </Card>
    )
}

export default Post