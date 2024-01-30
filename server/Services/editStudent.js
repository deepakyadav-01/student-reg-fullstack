import Student from "../model/Student.js";

export const editStudentById = async (studentId, newData) => {
  try {
    const { fullname, dob, age, email, mobileno, gender, address } = newData;

    // Server-side validation for PATCH request
    // Validate email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email && !emailRegex.test(email)) {
      throw {
        status: 400,
        success: false,
        message: "Please provide a valid email address",
      };
    }

    // Validate mobile number format
    const mobileRegex = /^[6-9][0-9]{9}$/;
    if (mobileno && !mobileRegex.test(mobileno)) {
      throw {
        status: 400,
        success: false,
        message: "Please provide a valid 10-digit mobile number",
      };
    }

    const existingStudent = await Student.findById(studentId);

    if (!existingStudent) {
      throw {
        status: 404,
        success: false,
        message: "Student not found",
      };
    }

    // Use spread to create an update object
    const updateObject = {
      fullname: fullname || existingStudent.fullname,
      dob: dob || existingStudent.dob,
      age: age || existingStudent.age,
      email: email || existingStudent.email,
      mobileno: mobileno || existingStudent.mobileno,
      gender: gender || existingStudent.gender,
      address: address || existingStudent.address,
    };

    // Update student's information
    const editedStudent = await Student.findByIdAndUpdate(
      studentId,
      updateObject,
      { new: true }
    );

    return {
      success: true,
      message: "Student edited successfully",
      editedStudent,
    };
  } catch (error) {
    console.error(error);
    throw {
      status: error.status || 500,
      success: false,
      message: "Error while editing student",
      error,
    };
  }
};
