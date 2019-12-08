const mongoose = require('mongoose');
//const db = require("../db");


// Create a model from the schema
const ExerciseSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String
});

const exercises =mongoose.model("exercises", ExerciseSchema);
// Export the Song model.
module.exports = exercises;
