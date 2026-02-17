const mongoose = require("mongoose");

const connectedDB = async () => {
    try {
        await mongoose.connect(process.env.DB_KEY);
        console.log("Database connected Succesfully");
    } catch (error) {
        console.log("DB error");
    }
}
module.exports = connectedDB;