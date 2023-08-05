const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;

let database;

async function getDatabase() {
    const client = await MongoClient.connect('mongodb+srv://codesantaisai:ZI2hnTwOdGn4DA2o@cluster0.0zp32a0.mongodb.net/?retryWrites=true&w=majority');
    database = client.db('library');

    if (!database) {
        console.log('Database not connected');
    }

    return database;
}

module.exports = {
    getDatabase,
    ObjectID
}