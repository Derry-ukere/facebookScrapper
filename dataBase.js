import Post from './models/postModels.js'
import Comment from './models/commentsModel.js'
import connectDB from './db.js'
import { posts, comments } from './data.js'
connectDB()

export const saveToDataBase = async (schema, data) => {
  try {
    await schema.deleteMany()
    await schema.insertMany(data)
    console.log('imported!!')
  } catch (error) {
    console.log('error occured', error)
  }
}

export const createPost = async (obj) => {
  try {
    const post = new Post({
      Post,
      Poster,
      Poster,
    })

    await post.save()
    console.log('added!!')
  } catch (error) {
    console.log('this is error!', error)
  }
}

export const getPosts = async () => {
  const posts = await Post.find({})
  return posts
}

export const getComments = async () => {
  const comments = await Comment.find({})
  return comments
}
