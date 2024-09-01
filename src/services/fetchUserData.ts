import axios from "axios"
import apiUrl from './../helpers/apiUrl';

export default async function fetchUserData<T>(token: string | null) {
  const response = await axios.get<T>(apiUrl + "/user", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response;
}