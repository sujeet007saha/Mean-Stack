const express = require('express');
const app = express();



//Config dotenv
const dotenv = require("dotenv");
dotenv.config();

//config Mongoose
const mongoose = require("mongoose");

//db Connection
mongoose.connect(
    process.env.DB_CONNECT, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected to DB")
    );


//Fixing cors issue
const cors = require("cors");
//cors as Middlewaare
app.use(cors());    

app.use('/routes/public', express.static('public'));


//Imports routes
const userRoutes = require("./routes/user");
const learningRoutes = require("./routes/learning");
const helplineRoutes = require("./routes/helpline");
const policiesRoutes = require("./routes/policies");

//Json Middleware
bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '10mb', extended: true}));

app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

//Middleware
app.use("/ubs/user", userRoutes);
app.use("/ubs/learning", learningRoutes);
app.use("/ubs/helpline", helplineRoutes);
app.use("/ubs/policies", policiesRoutes);

app.listen(3000, () => console.log("app is listening at port 3000"))