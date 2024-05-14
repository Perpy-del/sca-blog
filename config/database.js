const { MongoClient } = require('mongodb')

let host = 'localhost';

let port = '27017';

let protocol = 'mongodb'

let databaseString = `${protocol}://${host}:${port}`

const client = new MongoClient(databaseString);

async function connectToDatabase() {
    let connection;

    try {
        connection = await client.connect();

        const db = connection.db('bloggy')

        return db;
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error}`)

        throw error;
    }
}

const db = connectToDatabase();

module.exports = db;
