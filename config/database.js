const { MongoClient } = require('mongodb')

let host = process.env.DB_HOST;

let port = process.env.DB_PORT;

let protocol = process.env.DB_CONNECTION;

let databaseName = process.env.DB_DATABASE;

let databaseString = `${protocol}://${host}:${port}`

const client = new MongoClient(databaseString);

async function connectToDatabase() {
    let connection;

    try {
        connection = await client.connect();

        const db = connection.db(databaseName)

        return db;
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error}`)

        throw error;
    }
}

const db = connectToDatabase();

module.exports = db;
