const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "name is required"],
        trim: true,
        maxLength: 50,
    },
    email: {
        type: String,
        require: [true, "email is required"],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    phone: {
        type: Number,
        require: true,
        maxLength: 11,
    }
}, {timestamps: true})

module.exports = mongoose.model("User", registrationSchema);