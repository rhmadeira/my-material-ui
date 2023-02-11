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
    const urlRelative = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nome_like=${filter}`;
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

const getById = async (): Promise<any> => {
  try {
  } catch (error) {}
};

const create = async (): Promise<any> => {
  try {
  } catch (error) {}
};

const updateById = async (): Promise<any> => {
  try {
  } catch (error) {}
};

const deleteById = async (): Promise<any> => {
  try {
  } catch (error) {}
};

export const PessoasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
