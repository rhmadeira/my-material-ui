import { api } from "../axios";

interface IAuth {
  accessToken: string;
}

export const auth = async (email: string, password: string): Promise<IAuth> => {
  try {
    //Na vida real, aqui seria um post para a rota de autenticação e ele devolveria o token
    // const response = await api.post("/auth", { email, password });
    const { data } = await api.get("/auth", { data: { email, password } });
    return data;
  } catch (error) {
    throw error;
  }
};
