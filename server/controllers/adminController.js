import bcrypt from "bcryptjs";
import * as adminService from "../Services/admin.js";

export const getProfile = async (req, res, next) => {
  try {
    const user = await adminService.getUserProfile(req.userData.userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  const { username, password, role } = req.body;
  const adminId = req.userData.userId;

  try {
    await adminService.validateUserRole(role);
    await adminService.checkUserExists(username);
    
    const hashedPassword = await bcrypt.hash(password, 10);
    await adminService.createUser(username, hashedPassword, role, adminId);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  const adminId = req.userData.userId;
  const { limit, offset, sortField, sortOrder } = req.query;

  try {
    const result = await adminService.getAllUsers(adminId, limit, offset, sortField, sortOrder);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const createFirstUser = async (req, res, next) => {
  try {
    const result = await adminService.createFirstUser();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
