import { Environment } from "../../../environments";
import { api } from "../axios";

interface IPerson {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

interface IDetailsPerson {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

type TPersonTotalCount = {
  data: IPerson[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ""
): Promise<TPersonTotalCount | Error> => {
  try {
    const urlRelative = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
    const { data, headers } = await api.get(urlRelative);
    if (data) {
      const totalCount = Number(
        headers["x-total-count"] || Environment.LIMITE_DE_LINHAS
      );
      return { data, totalCount };
    }
    return new Error("Não foi possível obter os dados");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Não foi possível obter os dados"
    );
  }
};

const getById = async (id: number): Promise<IDetailsPerson | Error> => {
  try {
    const { data } = await api.get(`/pessoas/${id}`);
    if (data) {
      return data;
    }
    return new Error("Erro ao consultar os dados");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Não foi possível consultar os dados"
    );
  }
};

const create = async (
  dados: Omit<IDetailsPerson, "id">
): Promise<number | Error> => {
  try {
    const { data } = await api.post<IDetailsPerson>(`/pessoas`, dados);
    if (data) {
      return data.id;
    }
    return new Error("Erro ao criar os dados");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Não foi possível criar os dados"
    );
  }
};

const updateById = async (
  id: number,
  dados: IDetailsPerson
): Promise<void | Error> => {
  try {
    await api.put(`/pessoas/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Não foi possível atualizar os dados"
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await api.delete(`/pessoas/${id}`);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Não foi possível deletar os dados"
    );
  }
};

export const PessoasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
