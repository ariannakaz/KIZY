var mongoose = require('mongoose');

var Exercises = new mongoose.Schema({
    name: [],
    category: [],
    description: []
});

// Export this schema to make it available from other files
module.exports = mongoose.model('Exercise', exercises)
