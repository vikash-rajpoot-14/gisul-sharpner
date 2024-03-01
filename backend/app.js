const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors  = require('cors');


dotenv.config({path:"./config.env"});
const app = express();

//middlewares
app.use(express.json());
app.use(cors())

//routes
const courseRoute = require("./routes/courseRoute")

//database connection
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connected to mongodb");
    app.listen(process.env.PORT, () => {
        console.log('Example app listening on port 3000!');
    })
}).catch(err => console.log(err))

//routes
app.use("/api/course",courseRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

