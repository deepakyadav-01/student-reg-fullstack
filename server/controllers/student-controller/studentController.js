import * as authService from '../../Services/studentService.js'

export const registerStudent = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const result = await authService.registerStudent(username, email, password);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ error: error.message || 'Internal Server Error' });
  }
};

export const loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await authService.loginStudent(email, password);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ error: error.message || 'Internal Server Error' });
  }
};

export const currentStudent = async (req, res) => {
  try {
    const result = authService.getCurrentStudent(req.user);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ error: error.message || 'Internal Server Error' });
  }
};
