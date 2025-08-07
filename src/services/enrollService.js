import axios from "axios";

const API_URL = "http://localhost:5000/api/enroll";

const enroll = async (data, token) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const response = await axios.post(API_URL, data, { headers });
  return response.data;
};

export default { enroll };