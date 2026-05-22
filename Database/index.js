const mongoose = require('mongoose')

async function connectToDatabase() {
    await mongoose.connect(
        'mongodb://bipinkhonma:Bipin321@ac-hbhqb06-shard-00-00.esdjrqj.mongodb.net:27017,ac-hbhqb06-shard-00-01.esdjrqj.mongodb.net:27017,ac-hbhqb06-shard-00-02.esdjrqj.mongodb.net:27017/?ssl=true&replicaSet=atlas-pq9h24-shard-0&authSource=admin&retryWrites=true&w=majority'
    )
    console.log("Database connected successfully")
}

module.exports = connectToDatabase