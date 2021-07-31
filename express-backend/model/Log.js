const mongoose = require('mongoose');
const {Timestamp} = require("mongodb");

const logSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Log = module.exports = mongoose.model('Log', logSchema);
