/// Dependencies ///
const express = require('express');
const app = express();
const path = require('path');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/// Static Web Server ///
// app.use(express.static(path.join(__dirname, 'dist')));
/// Personal static files in the browser ///
//app.use(express.static(__dirname + '/public'));

/// Connection to MongoDB ///
// mongoose.connect
//     ('mongodb+srv://root:rootPass@invoicegeneratorapp-ew1ik.gcp.mongodb.' +
//         'net/invoiceStorage?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

/// Catch error during MongoDB connection ///
// mongoose.connection.on('error', (error) => {
//     console.log('Error!' + error);
// });

/// Once connection to MongoDB is open ///
// mongoose.connection.once('open', () => {
//     console.log('The connection to Mongo DB is working!');
// });

/// Basic Express route ///
// app.get('/hello',(req, response) => {
//     response.send('<h1>Something like Hello world!!!</h1>');
// });

/// Body Parser- Saves input from the BODY of the web browser then saves as JSON object ///
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/// Rest API's for routes ///Create
// app.use('/api/createinvoice', require('./routes/create.js'));
/// Read/GET
// app.get('/', (req, res) => {
//     req.query
//     req.body
//     req.header
//     req.params
// });
/// Update
// app.use('/api/updateinvoice', require('./routes/update.js'));
/// Delete
// app.use('/api/deleteinvoice', require('./routes/delete.js'));


/// Open Port listener ///
app.listen(3001, () => {
    console.log('Listening at localhost: 3001');
});