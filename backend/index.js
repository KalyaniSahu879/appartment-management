const express = require('express');
const connectDB = require('./db')
const app = express();
const cors = require('cors');

const managerController = require('./controllers/managerController')
const flatController = require('./controllers/flatController')
const residentController = require('./controllers/residentControllre')
app.use(express.json());
app.use(cors());

app.use('/manager',  managerController )
app.use('/flat' , flatController )
app.use('/resident',residentController )

app.listen(3002 , ()=>{
    connectDB();
})