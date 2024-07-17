import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Login User
const loginUser = async (req, res) => {};

// Register User
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // Checking is user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    // Validating email format and strong password
  } catch (error) {
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // Hashing user password
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  }
};

export { loginUser, registerUser };
