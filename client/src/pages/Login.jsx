import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make the API request to login
      const response = await axios.post(
        "http://localhost:5000/api/v1/admin/login",
        {
          username,
          password,
        }
      );

      // Assuming the API response contains a JWT token and user role
      const { token, role, user } = response.data;

      // Store the token (you may want to use more secure storage, e.g., cookies or local storage)
     // Store the token and user information in local storage
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('user', JSON.stringify(user));


      // Navigate based on the user role
      if (role === "user") {
        navigate("/user/dashboard");
      } else if (role === "admin") {
        navigate("/admin/dashboard");
      }
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="bg-blue-400">
    <Navbar/>
    <div className=" flex flex-row min-h-screen overflow-hidden">
      {/* card 1 */}
      <div className="w-full p-6 m-auto bg-white rounded-md  ring-blue-800 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 uppercase">
          Login
        </h1>
        <form className="mt-6" onSubmit={handleLogin}>
          <div className="mb-2">
            <label
              htmlFor="username" // Use htmlFor instead of "for"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username} // Bind value to the state variable
              onChange={(e) => setUsername(e.target.value)} // Update state on input change
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password" // Use htmlFor instead of "for"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password} // Bind value to the state variable
              onChange={(e) => setPassword(e.target.value)} // Update state on input change
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>

    </div>
    </div>
  );
}
