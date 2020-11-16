const express     = require('express');
const dotenv      = require('dotenv');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');

dotenv.config();

// express server details
const app         = module.exports = express()
const port        = process.env.PORT || 3000

// database details
const dbuser      = process.env.DBUSER
const dbpassword  = process.env.DBPASS
const dbdetails   = process.env.DBDETAILS //mlab database connection details

const mongoDB     = `mongodb://${dbuser}:${dbpassword}@${dbdetails}`;

//Set up default mongoose connection
mongoose.connect(
  mongoDB, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }
);

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', console.log.bind(console, 'MongoDB connected'));
db.on('disconnected', console.log.bind(console, 'MongoDB disconnected'));

// include bodyparser to get data from body
app.use(bodyParser.urlencoded({
    extended: true
}));

// API's
app.use('/api/shorten', require('./controllers/shorten'));

// starter express server on port
app.listen(port, () => {
  console.log(`Server started at URL:${port}`)
});