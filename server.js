const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

const app = express();
app.use(express.json()); // Make sure it comes back as json

const connectionURL = process.env.MONGO_URL;

const username = process.argv[2].split('=')[1]
const pw = process.argv[3].split('=')[1]
console.log(`Hello, ${username}, ${pw}`)

mongoose.connect("mongodb+srv://"+username+":"+pw+"@cluster0-ii2lz.mongodb.net/exercises?retryWrites=true&w=majority", 
  { useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true });

app.use(route);

app.listen(3000, () => { console.log('Server is running...') });



