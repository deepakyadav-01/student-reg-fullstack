import Student from "../model/Student.js";

export const addStudent = async (formData) => {
  try {
    const { fullname, dob, age, email, mobileno, gender, address } = formData;

    // Server-side validation
    if (!fullname || !dob || !age || !email || !mobileno || !gender || !address) {
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

    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      throw {
        status: 200,
        message: "Student already exists",
      };
    }

    const newStudent = await new Student({
      fullname,
      dob,
      age,
      email,
      mobileno,
      gender,
      address,
    }).save();

    return {
      status: 201,
      success: true,
      message: "Student added successfully",
      formData: newStudent,
    };
  } catch (error) {
    console.error(error);
    return {
      status: error.status || 500,
      success: false,
      message: "Error in adding data",
      error,
    };
  }
};
