const path = require('path')
require('dotenv').config()
const express = require('express')
const app = express()
const connectToDatabase = require('./Database')
const blog = require('./Database/model/blodModel')
app.use(express.json())
const {multer, storage} = require('./Database/middleware/multerConfig')
const upload = require('./Database/middleware/multerConfig')
const fs = require('fs')


connectToDatabase()

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'This is home page'
    })
})

app.post('/blog',upload.single('image'), async (req, res) => {
    const {title,subtitle,description} = req.body
    const filename  = req.file.filename 
    if (!title || !subtitle || !description) {
        return res.status(400).json({
            message: 'Please provide all required fields'       
  
    })
    }
    await blog.create({
        title: title,
        subtitle: subtitle,
        description: description,
        image: filename
    })
    res.status(200).json({
        message: 'Blog created successfully'
    })
})

app.get("/blog", async (req, res) => {
    const blogs = await blog.find()
    res.status(200).json({
        message: 'Blogs retrieved successfully',
        data: blogs
    })
})  

app.get("/blog/:id", async(req,res)=>{
    const id = req.params.id

    const singleBlog = await blog.findById(id)

    if(!singleBlog){
        return res.status(404).json({
            message:"no data found"
        })
    }

    res.status(200).json({
        message:"Blog fetched successfully",
        data: singleBlog
    })
})
app.delete("/blog/:id", async(req,res)=>{
    const id = req.params.id
    const blog = await blog.findById(id)
    const imagename = blog.image
    fs.unlinkSync(`storage/${imagename}`,(err) =>{
        if(err){
            console.log(err)
        }else{
            console.log("file deleted successfully")
        }
    })

    res.status(200).json({
        message:"Blog deleted successfully"
    })
})

  app.patch("/blog/:id", upload.single('image'), async(req,res)=>{
    const id = req.params.id
    const {title,subtitle,description} = req.body

    let imageName

    if(req.file){
        imageName = req.file.filename

        const singleBlog = await blog.findById(id)

        const oldimagename = singleBlog.image

        if(oldimagename){
            fs.unlinkSync(`storage/${oldimagename}`)
        }
    }

    await blog.findByIdAndUpdate(id,{
        title: title,
        subtitle: subtitle,
        description: description,
        image: imageName 
    })

    res.status(200).json({
        message:"Blog updated successfully"
    })
})

    
app.use(express.static('./storage'))

app.listen(process.env.PORT, () => {
    console.log('Node.js project has started on port', process.env.PORT)
})




// "mongodb://bipinkhonma:Bipin321@ac-hbhqb06-shard-00-00.esdjrqj.mongodb.net:27017,ac-hbhqb06-shard-00-01.esdjrqj.mongodb.net:27017,ac-hbhqb06-shard-00-02.esdjrqj.mongodb.net:27017/?ssl=true&replicaSet=atlas-pq9h24-shard-0&authSource=admin&retryWrites=true&w=majority"
