import * as studentService from '../../Services/deleteStudent.js';

export const deleteStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.deleteStudentById(studentId);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ error: error.message || 'Internal Server Error' });
  }
};
