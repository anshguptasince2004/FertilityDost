import axios from "axios";

const API_URL = "http://localhost:5000/api/bookings";

const bookAppointment = async (bookingData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(API_URL, bookingData, config);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Booking failed";
  }
};

export default { bookAppointment };