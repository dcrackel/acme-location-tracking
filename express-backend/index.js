const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const allowCORS = require("./middleware/cors");

mongoose.connect('mongodb+srv://testadmin:testadmin@cluster0.onjrw.mongodb.net/acme?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, {});
const db = mongoose.connection;

//check db
db.once('open', () => console.log('connected to mongo db...'));
db.on('error', (err) => { console.log(err)});

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members api Routes
app.use('/api/people',
    allowCORS,
    require('./routes/api/people'));

app.use('/api/log',
    allowCORS,
    require('./routes/api/log'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));