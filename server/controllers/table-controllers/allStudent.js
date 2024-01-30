import * as studentService from '../../Services/allStudent.js';

export const getAllStudent = async (req, res) => {
  try {
    const { page, limit, sortBy, order, search } = req.query;
    const result = await studentService.getAllStudents(page, limit, sortBy, order, search);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ error: error.message || 'Internal Server Error' });
  }
};

export const getSingleStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentById(studentId);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ error: error.message || 'Internal Server Error' });
  }
};
