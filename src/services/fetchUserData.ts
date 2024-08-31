import axios from "axios"

export default async function fetchUserData<T>(token: string | null) {
  const response = await axios.get<T>("https://chat-backend-lime.vercel.app/user", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response;
}