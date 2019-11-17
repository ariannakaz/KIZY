const mongoose = require('mongoose');

// Get MongoDB credentials from environment variables.
const connectionURL = process.env.MONGO_URL;

// Create an account on MongoDB Atlas, create a cluster, get the URL
// you need to add below.
mongoose.connect(mongodb+srv://cluster0-ii2lz.mongodb.net/test, 
  { dbname: exercises,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true });

// Export mongoose as the module return value.
module.exports = mongoose;
