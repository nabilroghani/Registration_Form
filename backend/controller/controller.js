const User = require("../models/model");

const userRegistrationForm = async (req, res) => {
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        return res.send("Please provide all Field");
    }

    const isMatchEmail = await User.find(email);
    if(isMatchEmail) return res.send("Email is Already Apply try another email");

    const newUser = await User.create(name, email, phone);

    res.send("User Register Succesfully");
}

module.exports = userRegistrationForm;