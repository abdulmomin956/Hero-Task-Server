const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.sn77ciu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




const handleAdd = async (req, res) => {
    const docs = req.body;
    console.log(docs);
    try {
        await client.connect();
        const taskCollection = client.db("TaskDB").collection("tasks");

        // create a document to insert
        const doc = {
            title: "Record of a Shriveled Datum",
            description: "No bytes, no problem. Just insert a document, in MongoDB",
        }
        const result = await taskCollection.insertOne(doc);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
    finally {
        await client.close();
    }
}

// run().catch(console.dir);

module.exports = { handleAdd };