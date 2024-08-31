import axios from "axios";
import { CreateUserData } from "../types";

export async function registerUser(user: CreateUserData) {
  const response = await axios.post("https://chat-backend-lime.vercel.app/register", user, 
    { 
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  return response;
}