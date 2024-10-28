/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export interface IResultAuth {
  id: string;
  username: string;
  active: boolean;
  createAt: string;
  updateAt: string;
  token: string;
}

export const authApi = {
  queryKey: "auth",

  login: async (payload: IFormLogin) => {
    return await http.post<any, IResultAuth>(
      `${authApi.queryKey}/login`,
      payload
    );
  },

  logout: async () => {
    return await http.get<any, any>(`${authApi.queryKey}/logout`);
  },

  createUser: async (payload: any) => {
    return await http.post<any>(`${authApi.queryKey}/create`, payload);
  },
};