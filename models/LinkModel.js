import mongoose from 'mongoose'

const linkSchema = mongoose.Schema({
  link: {
    type: String,
  },
})

const Link = mongoose.model('Link', linkSchema)

export default Link
