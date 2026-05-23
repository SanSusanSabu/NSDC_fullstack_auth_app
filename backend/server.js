require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

connectDB();

const PORT = process.env.PORT || 3000;

module.exports = app;

//importing express module
// const express = require('express');

// //LOAD ENV VARIABLES
// require("dotenv").config();

// //calling express function
// const app =require("./app");

// //importing database onnection
// const connectDB= require("./config/db");

// //connect databse
// connectDB();

// //middleware to parse JSON bodies
// app.use(express.json());


// //define a root for the root URL
// app.get('/',(req,res) => {
//         res.send('Hello World!!!')
// });

// //define port
// const PORT=process.env.PORT;

// app.listen(PORT, ()=> {
//     console.log(`Server is running on the port ${PORT}`)
// });


// // importing express module
// const express = require('express');
// const path = require('path');

// // calling express function
// const app = express();

// // middleware
// app.use(express.json());

// // serve frontend folder
// app.use(express.static(path.join(__dirname, 'frontend')));

// // login route
// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'login.html'));
// });

// // register route
// app.get('/register', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'register.html'));
// });

// // default route
// app.get('/', (req, res) => {
//     res.redirect('/login');
// });

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });