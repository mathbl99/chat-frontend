import axios, { AxiosResponse } from "axios";

type UserQuery = {
  email: string,
  password: string
}

type Token = {
  token: string,
}

const authenticateUser = async (query: UserQuery): Promise<AxiosResponse<Token>> => {
  const { email, password } = query;

  const response = await axios.post("http://localhost:3000/login", 
    {
      email,
      password,
    }, 
    { 
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response;
}

export default authenticateUser;
