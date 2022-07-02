const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.sn77ciu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const handleUpdate = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    // console.log(id);
    try {
        await client.connect();
        const taskCollection = client.db("TaskDB").collection("tasks");
        const result = await taskCollection.updateOne({ _id: ObjectId(id) }, { $set: data })
        res.send(result)
    } catch (err) {
        res.send(err)
    }
}

module.exports = { handleUpdate };