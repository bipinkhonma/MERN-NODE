const mongoose = require('mongoose')
const schema = mongoose.Schema

const blogSchema = new schema({
    title: {
        type: String,
        unique: true,
    },
    subtitle: {
        type: String,
    },
    description: {
        type: text,
    },
    image: {
        type: String,           
    },
    age: {
        type: Number,
    },
})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog