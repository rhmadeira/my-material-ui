import { Environment } from "../../../environments";
import { api } from "../axios";

interface ICity {
  id: number;
  nome: string;
}

interface IDetailsCity {
  id: number;
  nome: string;
}

type TCityTotalCount = {
  data: ICity[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ""
): Promise<TCityTotalCount | Error> => {
  try {
    const urlRelative = `/cidades?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nome_like=${filter}`;
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

const getById = async (id: number): Promise<IDetailsCity | Error> => {
  try {
    const { data } = await api.get(`/cidades/${id}`);
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
  dados: Omit<IDetailsCity, "id">
): Promise<number | Error> => {
  try {
    const { data } = await api.post<IDetailsCity>(`/cidades`, dados);
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
  dados: IDetailsCity
): Promise<void | Error> => {
  try {
    await api.put(`/cidades/${id}`, dados);
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
    await api.delete(`/cidades/${id}`);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Não foi possível deletar os dados"
    );
  }
};

export const CidadesService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
