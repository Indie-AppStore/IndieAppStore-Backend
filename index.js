const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const { connectMongoDB } = require('./config/mongodb');
const { connectCockroachDB } = require('./config/cockroachdb');
const routes = require('./routes');
const { errorHandler } = require('./middleware');

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

connectMongoDB();
connectCockroachDB();

app.use('/api/v1', routes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
