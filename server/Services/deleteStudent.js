import Student from "../model/Student.js";

export const deleteStudentById = async (studentId) => {
  try {
    // Check if the student exists
    const existingStudent = await Student.findById(studentId);

    if (!existingStudent) {
      throw {
        status: 404,
        success: false,
        message: "Student not found",
      };
    }

    // Remove the student from the database
    await Student.findByIdAndRemove(studentId);

    return {
      success: true,
      message: "Student deleted successfully",
    };
  } catch (error) {
    console.error(error);
    throw {
      status: error.status || 500,
      success: false,
      message: "Error while deleting student",
      error,
    };
  }
};
