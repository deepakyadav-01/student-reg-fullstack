import createHttpError from "http-errors";
import User from "../model/User.js";

export const getUserProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");
  if (!user) {
    throw createHttpError(404, "User not found");
  }
  return user;
};

export const validateUserRole = async (role) => {
  if (role !== "ADMIN" && role !== "USER") {
    throw createHttpError(400, "Bad Request, role can be ADMIN or USER");
  }
};

export const checkUserExists = async (username) => {
  const user = await User.findOne({ username });
  if (user) {
    throw createHttpError(400, "User already exists");
  }
};

export const createUser = async (username, password, role, adminId) => {
  const user = new User({ username, password, role, adminId });
  await user.save();
};

export const getAllUsers = async (adminId, limit, offset, sortField, sortOrder) => {
  const sortOptions = {};
  sortOptions[sortField] = sortOrder === "asc" ? 1 : -1;

  const usersQuery = User.find({ adminId }).select("-password").sort(sortOptions);

  const totalUsers = await User.countDocuments({ adminId });
  const totalPages = Math.ceil(totalUsers / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  if (limit !== -1) {
    usersQuery.limit(limit).skip(offset);
  }

  const users = await usersQuery.exec();

  return {
    users,
    totalUsers,
    totalPages,
    currentPage,
  };
};

export const createFirstUser = async () => {
  const existingUser = await User.findOne();
  if (!existingUser) {
    const username = "admin"; // You can change this username
    const password = "admin123"; // You can change this password

    const user = new User({ username, password, role: "ADMIN" });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await User.deleteMany(); // Clean existing table

    await user.save();
    return { message: "User created successfully" };
  } else {
    return { message: "User already exists" };
  }
};
