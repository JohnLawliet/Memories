import {useEffect, useState} from 'react'
import {Container, Grid, Grow, AppBar, Typography} from '@material-ui/core'
import PostsPage from './posts-page/posts-page'
import Form from './form/form'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import {fetchPostsCreator} from './redux/action.creator'

import memories from './assets/memories.png'

function App() {
  const classes= useStyles()
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(fetchPostsCreator())
  }, [dispatch, currentId])

  
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="Memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <PostsPage setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
