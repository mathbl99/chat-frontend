import axios from "axios"

export default async function fetchUserData<T>(token: string | null) {
  const response = await axios.get<T>("http://localhost:3000/user", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response;
}