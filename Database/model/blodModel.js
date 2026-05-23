const mongoose = require('mongoose')
const Schema = mongoose.Schema

new blogschema = new Schema({
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
    
   const Blog = mongoose.model('Blog', blogschema)
   module.exports = Blog