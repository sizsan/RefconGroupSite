const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const serviceRouter = require('./routes/services_router');

const port = 3000

const app = express()
app.use(cors())
app.use(bodyParser.json())

const dbConn = 'mongodb://localhost/refcon_group'
// Set four properties to avoid deprecation warnings:
mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database!');
        }
    });

// routing
app.use('/services', serviceRouter)

app.listen(port, () => {
	console.log(`REFCON group MERN app listening on port ${port}`)
})