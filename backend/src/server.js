const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();

mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3333);