import Post from './models/postModels.js'
import Comment from './models/commentsModel.js'
import Link from './models/LinkModel.js'
import connectDB from './db.js'
connectDB()

export const saveToDataBase = async (schema, data) => {
  try {
    // await schema.deleteMany()
    await schema.insertMany(data)
    console.log(`imported!...`)
  } catch (error) {
    console.log('error occured', error)
  }
}

export const saveLinkToDataBase = async (schema, data) => {
  try {
    // await schema.deleteMany()
    await schema.insertMany(data)
    console.log(`added Link!...`)
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

export const getLinksFromDb = async () => {
  const links = await Link.find({})
  return links
}

export const getComments = async () => {
  const comments = await Comment.find({})
  return comments
}
