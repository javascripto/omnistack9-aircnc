require('./config/environment');

const cors = require('cors');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();

mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(router);


app.listen(process.env.PORT || 3333);
