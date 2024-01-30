import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
import User from "../model/User.js";

const createToken = (user) => {
  return jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
};

export const loginUser = async (username, password) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw createHttpError(404, "User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw createHttpError(401, "Invalid credentials");
    }

    // Update loggedInCount and lastLogin
    user.loggedInCount += 1;
    user.lastLogin = new Date();
    await user.save();

    const token = createToken(user);
    return { token, role: user.role, id: user.id };
  } catch (error) {
    throw error;
  }
};

export const signupUser = async (username, password) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw createHttpError(400, "User already exists");
    }

    // Create new user
    const newUser = new User({ username, password });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();
    return { message: "User created successfully" };
  } catch (error) {
    throw error;
  }
};
