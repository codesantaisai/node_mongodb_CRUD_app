const mongodb = require('mongodb'); 
const MongoClient = mongodb.MongoClient;  //using mongoclient class from mongodb

let database;

async function getDatabase(){
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
    database = client.db('library');


}
