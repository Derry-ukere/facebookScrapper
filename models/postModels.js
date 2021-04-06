import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  Post: {
    type: String,
  },
  Poster: {
    type: String,
  },
  Date: {
    type: String,
  },
})

const Post = mongoose.model('Post', postSchema)

export default Post
