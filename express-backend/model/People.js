const mongoose = require('mongoose');

// const db = mongoose.connection;
// const dbo = db.useDb("acme");
// const rec = dbo.collection("people").findOne({
//     name : "John Doe"
// }, (err, result) => {
//     console.log(result);
// } );

const peopleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
});

// let people = {}
// const Person = mongoose.model('Person', peopleSchema);
// Person.find({}, (err, result) => {
//     console.log('PEOPLE....')
//     console.log(result);
//     people = result;
// });

const Person = module.exports = mongoose.model('Person', peopleSchema);
