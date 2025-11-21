const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    email: String,
    phone: String
});

const membermodel = mongoose.model('membermodel', memberSchema);
module.exports = membermodel;
