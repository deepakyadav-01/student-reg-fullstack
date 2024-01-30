import Student from "../model/Student.js";

export const updateStudent = async (studentId, updatedData) => {
  try {
    const {
      fullname,
      dob,
      age,
      email,
      mobileno,
      gender,
      address,
    } = updatedData;

    if (
      !fullname ||
      !dob ||
      !age ||
      !email ||
      !mobileno ||
      !gender ||
      !address
    ) {
      throw {
        status: 400,
        message: "All fields are required",
      };
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      throw {
        status: 400,
        message: "Please provide a valid email address",
      };
    }

    const mobileRegex = /^[6-9][0-9]{9}$/;
    if (!mobileRegex.test(mobileno)) {
      throw {
        status: 400,
        message: "Please provide a valid 10-digit mobile number",
      };
    }

    const existingStudent = await Student.findById(studentId);
    if (!existingStudent) {
      throw {
        status: 404,
        message: "Student not found",
      };
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      {
        fullname: fullname || existingStudent.fullname,
        dob: dob || existingStudent.dob,
        age: age || existingStudent.age,
        email: email || existingStudent.email,
        mobileno: mobileno || existingStudent.mobileno,
        gender: gender || existingStudent.gender,
        address: address || existingStudent.address,
      },
      { new: true }
    );

    return {
      status: 200,
      success: true,
      message: "Student updated successfully",
      updatedStudent,
    };
  } catch (error) {
    console.error(error);
    return {
      status: error.status || 500,
      success: false,
      message: "Error while updating student",
      error,
    };
  }
};
