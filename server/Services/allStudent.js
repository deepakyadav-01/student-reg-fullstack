import Student from "../model/Student.js";

export const getAllStudents = async (page = 1, limit = 10, sortBy = "fullname", order = "asc", search = "") => {
  try {
    page = Math.max(1, parseInt(page));
    const skip = (page - 1) * parseInt(limit);
    const sortOrder = order === "desc" ? -1 : 1;

    const allStudents = await Student.find({
      $or: [
        { fullname: { $regex: search, $options: "i" } }, // Case-insensitive substring match
        // Add more fields for searching as needed
      ],
    })
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(parseInt(limit));

    return {
      success: true,
      message: "All students retrieved successfully",
      formData: allStudents,
    };
  } catch (error) {
    console.error(error);
    throw {
      status: 500,
      success: false,
      message: "Error while retrieving students",
      error,
    };
  }
};

export const getSingleStudentById = async (studentId) => {
  try {
    const studentDetails = await Student.findById(studentId);

    if (!studentDetails) {
      throw {
        status: 404,
        success: false,
        message: "Student not found",
      };
    }

    return {
      success: true,
      message: "Single student details retrieved successfully",
      formData: studentDetails,
    };
  } catch (error) {
    console.error(error);
    throw {
      status: error.status || 500,
      success: false,
      message: "Error while retrieving student details",
      error,
    };
  }
};
