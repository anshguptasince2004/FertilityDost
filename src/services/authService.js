import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Signup failed";
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    const { token } = response.data;

    localStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Login failed";
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

const authService = {
  signup,
  login,
  logout,
};

export default authService;