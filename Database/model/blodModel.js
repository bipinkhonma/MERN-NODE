const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogschema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    subtitle: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,           
    }
})
    
   const blog = mongoose.model('blog', blogschema)
   module.exports = blog