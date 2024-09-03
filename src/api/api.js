import axios from "axios";

const url = "https://rattad24-backend-2-adf971f11ec1.herokuapp.com";

export const sendEmail = async (data) => {
  try {
    const res = await axios.post(`${url}/send-email`, data);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
