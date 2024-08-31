import { useContext, createContext, useMemo, ReactNode } from "react";
import authenticateUser from "../services/authenticateUser";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

type UserAuthData = {
  email: string,
  password: string
}

type AuthContextType = {
  token: string | null;
  login: (data: UserAuthData) => Promise<void>;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useLocalStorage('token', null);

  const navigate = useNavigate();

  const login = async ({ email, password }: UserAuthData) => {
    try {
      const response = await authenticateUser({ email, password });

      setToken(response.data.token);

      console.log("Login successful:", response.data.token);
    } catch (error) {
      setToken(null);

      throw error;
    }
  }

  const logout = () => {
    setToken(null);
    navigate("/", { replace: true });
  }

  const value = useMemo(
    () => ({
      token,
      login,
      logout,
    }),
    [token]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};