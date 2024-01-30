import * as authService from '../Services/auth.js';

export const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const result = await authService.loginUser(username, password);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const signup = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const result = await authService.signupUser(username, password);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
