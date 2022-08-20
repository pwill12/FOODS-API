const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth')
const FoodRoute = require('./routes/foods')
const CartRoute = require('./routes/cart')
const OrderRoute = require('./routes/order')




dotenv.config()

const app = express()

mongoose.connect(
    process.env.Mongokey
    ).then(()=> console.log('successful'))
    .catch((err) => {
        console.log(err)
    })

const corsOptions = {
    origin: "*",
    "Access-Control-Allow-Credentials": true,
};
app.use(cors(corsOptions));

app.use(express.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);


app.use('/api', authRoute)
app.use('/', FoodRoute)
app.use('/', CartRoute)
app.use('/', OrderRoute)





app.listen(4000, function () {
    console.log('server running')
})