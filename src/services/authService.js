import axios from "axios";

const USER_API_URL = "http://localhost:5000/api/auth";
const ADMIN_API_URL = "http://localhost:5000/api/admin";

const signup = async (userData) => {
  try {
    const response = await axios.post(`${USER_API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Signup failed";
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(`${USER_API_URL}/login`, userData);
    const { token } = response.data;

    localStorage.setItem("token", token); 
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Login failed";
  }
};

const adminLogin = async (userData) => {
  try {
    const response = await axios.post(`${ADMIN_API_URL}/login`, userData);
    const { token } = response.data;

    localStorage.setItem("adminToken", token);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Admin login failed";
  }
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("adminToken");
};

const authService = {
  signup,
  login,
  adminLogin,
  logout,
};

export default authService;