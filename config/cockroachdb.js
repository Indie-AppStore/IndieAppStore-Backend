const { Client } = require('pg');

const connectCockroachDB = async () => {
    const client = new Client({
        connectionString: process.env.COCKROACHDB_URI,
        ssl: {
            rejectUnauthorized: false
        }
    });
    await client.connect();
    console.log('CockroachDB connected');
    return client;
};

module.exports = { connectCockroachDB };
