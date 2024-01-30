import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authStudent from '../model/authStudent.js';
import { isStudentRegistered } from '../helpers/authHelpers.js';

const generateToken = (studentId) => {
  return jwt.sign({ id: studentId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const registerStudent = async (username, email, password) => {
  if (!username || !email || !password) {
    throw { status: 400, message: 'All fields are mandatory' };
  }

  const studentAvailable = await isStudentRegistered(email);
  if (studentAvailable) {
    throw { status: 400, message: 'User already registered' };
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const student = await authStudent.create({
    username,
    email,
    password: hashedPassword,
  });

  // Generate and return JWT token upon successful registration
  const token = generateToken(student._id);
  return { _id: student.id, email: student.email, token };
};

export const loginStudent = async (email, password) => {
  const student = await authStudent.findOne({ email });

  if (student && (await bcrypt.compare(password, student.password))) {
    // Generate and return JWT token upon successful login
    const token = generateToken(student._id);
    return { _id: student.id, email: student.email, token };
  } else {
    throw { status: 401, message: 'Invalid email or password' };
  }
};

export const getCurrentStudent = (user) => {
  return { _id: user._id, email: user.email };
};
