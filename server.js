const express = require('express');

const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const route = require('./route.js');

app.use(express.static('public')); // Make sure it comes back as json
app.use(bodyParser.json());

const router = express.Router();

const connectionURL = process.env.MONGO_URL;

const username = process.argv[2].split('=')[1]
const pw = process.argv[3].split('=')[1]
console.log(`Hello, ${username}, ${pw}`)

mongoose.connect("mongodb+srv://"+username+":"+pw+"@cluster0-ii2lz.mongodb.net/exercises?retryWrites=true&w=majority", 
  { useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true });

app.use(route);


app.listen(1111, () => { console.log('Server is running...') });




