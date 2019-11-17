// require app, mongoose
//var app = require('./server.js');

const mongoose = require('mongoose');

// Get MongoDB credentials from environment variables.
const connectionURL = process.env.MONGO_URL;

const username = process.argv[2].split('=')[1]
const pw = process.argv[3].split('=')[1]
console.log(`Hello, ${username}, ${pw}`)


// Create an account on MongoDB Atlas, create a cluster, get the URL
// you need to add below.
mongoose.connect("mongodb+srv://"+username+":"+pw+"@cluster0-ii2lz.mongodb.net/test?retryWrites=true&w=majority", 
  { useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true });

// Export mongoose as the module return value.
module.exports = mongoose;
