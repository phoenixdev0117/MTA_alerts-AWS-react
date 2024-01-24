import ky from "ky";

const login = async (username, password) => {
  try {
    const response = await ky
      .post("http://127.0.0.1:8000/api-token-auth/", {
        json: { username, password },
      })
      .json();
    const token = response.token 
    console.log(token)
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export default {
  login,
};
