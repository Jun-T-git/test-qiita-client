import axiosBase, { AxiosInstance, AxiosResponse } from 'axios';
import { apiKey, apiUrl } from '~/config.dev';

export type LoginError = {
  status?: number;
};

export const initAxios = (): AxiosInstance => {
  return axiosBase.create({
    baseURL: `${apiUrl}/1.1/statuses/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        localStorage.getItem('token') ? localStorage.getItem('token') : ''
      }`,
    },
  });
};

export const login = async (): Promise<{
  token?: string;
  error?: LoginError;
}> => {
  try {
    const data: AxiosResponse<{
      token: string;
    }> = await axiosBase
      .create({
        baseURL: `${apiUrl}/oauth2/`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Authorization: `Basic ${apiKey}`,
        },
      })
      .post('token?grant_type=client_credentials');

    // ローカルストレージにトークンセット
    localStorage.setItem('token', data.data.token);

    return { token: data.data.token };
  } catch (e) {
    return {
      error: {
        status: e.response.status,
      },
    };
  }
};
