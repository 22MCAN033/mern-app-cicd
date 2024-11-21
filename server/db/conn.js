const { MongoClient } = require("mongodb")
const Db = "mongodb+srv://vpraw7849:vzAJ6djKXjlLH2zL@cluster-mern-deploy.wo7ak.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var _db

module.exports = {
    connectToMongoDB: async function (callback) {
        try {
            await client.connect()
            _db = client.db("employees")
            console.log("Successfully connected to MongoDB.")
            
            return callback(null)
        } catch (error) {
            return callback(error)
        }
    },

    getDb: function () {
        return _db
    }
}