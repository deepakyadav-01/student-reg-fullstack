import { addStudent } from "../../Services/addStudent.js";

export const submitForm = async (req, res) => {
  try {
    const formData = req.body;
    const result = await addStudent(formData);
    
    res.status(result.status).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in processing the request",
      error,
    });
  }
};
