import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  Commenter: {
    type: String,
  },
  Comment: {
    type: String,
  },
  tag: {
    type: String,
  },
})

const Comment = mongoose.model('Comment', commentSchema)
export default Comment
