const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    hobby: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    

})
const u = mongoose.model("user", userSchema);
module.exports = u;