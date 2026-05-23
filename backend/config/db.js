const mongoose = require("mongoose");
require("dotenv").config();

//database connection  function
const connectDB =async () => {
    try {
        //connect mongodb
        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB connected successfully");

    }
    catch(error){
        console.log("Database connected error");
        process.exit(1);
    }
};
module.exports = connectDB;