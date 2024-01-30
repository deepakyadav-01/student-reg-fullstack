import { updateStudent } from "../../Services/updateStudent.js";

export const updateForm = async (req, res) => {
  try {
    const { studentId } = req.params;
    const updatedData = req.body;

    const result = await updateStudent(studentId, updatedData);
    res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in processing the request",
      error,
    });
  }
};
