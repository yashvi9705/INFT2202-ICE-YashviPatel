const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/college');

// mongoose.set('useCreateIndex', true);

// declare Schema
let Schema = mongoose.Schema;

// Student schema
let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    email: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: Date.now
    },
    friends: [String],
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    }
}, {
    collection: 'user'
});

// Export schemas as models
module.exports.Users = mongoose.model('user', userSchema);