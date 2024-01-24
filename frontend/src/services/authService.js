import ky from "ky";

const login = async (username, password) => {
  try {
    const response = await ky
      .post("your_api_endpoint/login", {
        json: { username, password },
      })
      .json();
    return response;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export default {
  login,
};
