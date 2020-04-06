import axiosBase, { AxiosInstance, AxiosResponse } from 'axios';
import {Auth} from "~/domain/auth";

export type LoginError = {
  status?: number;
};

export const initAxios = (): AxiosInstance => {
  return axiosBase.create({
    baseURL: `/api/1.1/statuses/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        localStorage.getItem('token') ? localStorage.getItem('token') : ''
      }`,
    },
  });
};

export const fetchToken = async (auth:Auth): Promise<{
  token?: string;
  error?: LoginError;
}> => {
  const credentials = btoa(`${auth.key}:${auth.secret}`);

  try {
    const data: AxiosResponse<{
      access_token: string;
    }> = await axiosBase
      .create({
        baseURL: `/api/oauth2/`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Authorization: `Basic ${credentials}`,
        },
      })
      .post('token?grant_type=client_credentials');

    // ローカルストレージにトークンセット
    localStorage.setItem('token', data.data.access_token);

    return { token: data.data.access_token };
  } catch (e) {
    return {
      error: {
        status: e.response.status,
      },
    };
  }
};
