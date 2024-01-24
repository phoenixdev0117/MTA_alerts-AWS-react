import ky from "ky";
const apiUrl = process.env.REACT_APP_API_URL;

const login = async (username, password) => {
  const response = await ky
    .post(`${apiUrl}/api-token-auth/`, {
      json: { username, password },
    })
    .json();
  const token = response.token;
  console.log(token);
};

export default {
  login,
};
