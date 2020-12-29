// NOTE: to use the imports as such have to add "type": "module" in package.json

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routes/posts.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(express.json({ limit:"30mb", extended: "true" }))
app.use(express.urlencoded({ limit:"30mb", extended: "true" }))
app.use(cors())

app.use('/posts',router)



// const CONNECTION_URL = "mongodb+srv://root:root@cluster0.zx3js.mongodb.net/<dbname>?retryWrites=true&w=majority"
const port = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(
            port, () => console.log(`working on port ${port}`)
            )
        )
    .catch(err => console.log(err))