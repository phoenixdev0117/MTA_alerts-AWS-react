import ky from "ky";
const apiUrl = process.env.REACT_APP_API_URL;

interface LoginResponse {
  token: string;
}

const login = async (username:string, password:string) => {
  const response : LoginResponse = await ky
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
