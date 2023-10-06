import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { domain } from "./domain";

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
};

class AxiosWrapper {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: domain,
      headers,
    });
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.client.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.client.post<T, R>(url, data, config);
  }
}

export const axiosWrapper = new AxiosWrapper();
