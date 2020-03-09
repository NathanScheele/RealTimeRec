const app = require('./server/server.js');
// const mongoose = require('mongoose');

//Specify port number
let port = process.env.PORT || 3000;

var mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/realtimerec');

app.listen(port);

module.exports(app)
/*
//Connect to the database
mongoose.connect(process.env.REAL_REC_MONGODB_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log('DB Connected!')
    ).catch(err => {console.log(`DB Connection Error: ${err.message}`);})

//Start the server on the specified port
app.listen(port);
*/