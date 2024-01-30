import * as studentService from '../../Services/editStudent.js';

export const editStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const newData = req.body;

    const result = await studentService.editStudentById(studentId, newData);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ error: error.message || 'Internal Server Error' });
  }
};
