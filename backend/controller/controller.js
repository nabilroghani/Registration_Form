
const User = require("../models/model");

const userRegistrationForm = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    // Check karein ke file aayi hai ya nahi
    if (!req.file) {
      return res.status(400).json({ message: "Please upload an image" });
    }

    const image = req.file.path; // Cloudinary ka URL yahan se milega

    // 1. Validation (Fixed logic: if any of these is missing)
    if (!name || !email || !phone || !image) {
      return res.status(400).json({ message: "Please provide all fields" });
    }

    // 2. Duplicate Check
    const existingUser = await User.findOne({ email }); 
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // 3. Create User
    const newUser = await User.create({
      name,
      email,
      phone,
      image,
    });

    res.status(201).json({ message: "Registration successful", user: newUser });

  } catch (error) {
    console.error("Cloudinary/DB Error:", error);
    res.status(500).json({ message: "Registration error", error: error.message });
  }
};

const getData = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({message: "Error fetching data", error: error.message});
  }
}

module.exports = {userRegistrationForm, getData};