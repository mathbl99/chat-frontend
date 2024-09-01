import axios from "axios";
import { CreateUserData } from "../types";
import apiUrl from './../helpers/apiUrl';

export async function registerUser(user: CreateUserData) {
  const response = await axios.post(apiUrl + "/register", user, 
    { 
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  return response;
}