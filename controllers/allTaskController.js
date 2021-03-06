const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.sn77ciu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


const handleGetData = async (req, res) => {
    try {
        await client.connect();
        const taskCollection = client.db("TaskDB").collection("tasks");
        const result = await taskCollection.find({}).toArray();
        res.send(result)
    } catch (err) {
        res.sendStatus(500)
    }
}

module.exports = { handleGetData }