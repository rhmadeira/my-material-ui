import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { json } from "stream/consumers";
import { auth } from "../services/api/auth";

interface isAuthenticatedProps {
  isAuthenticated: boolean;
  logout: () => void;
  login: (email: string, password: string) => Promise<string | void>;
}

const AuthContext = createContext({} as isAuthenticatedProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    const accessToken = localStorage.getItem("@token");
    if (accessToken) {
      setAccessToken(JSON.parse(accessToken));
    } else {
      setAccessToken(undefined);
    }
  }, []);

  const handleLogin = useCallback(async (email: string, password: string) => {
    try {
      const response = await auth(email, password);
      localStorage.setItem("@token", JSON.stringify(response.accessToken));
      setAccessToken(response.accessToken);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("@token");
    setAccessToken(undefined);
  }, []);

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//hook para usar o contexto
export const useAuthContext = () => useContext(AuthContext);
