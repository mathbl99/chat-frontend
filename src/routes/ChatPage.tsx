import { Navigate } from "react-router-dom";
import axios from "axios";
import Chat from "../components/Chat";
import { useAuth } from "../hooks/useAuth";
import { FetchedUserData } from "../types";
import useUserData from './../hooks/useUserData';

function ChatPage() {
  const { token } = useAuth();
  const { error, data } = useUserData<FetchedUserData>(token);

  if (axios.isAxiosError(error)) {
    return error.response?.status === 401 &&
      <Navigate to="/" />
  }


  if (data) {
    return (
      <Chat user={data} />
    )
  }
}

export default ChatPage;