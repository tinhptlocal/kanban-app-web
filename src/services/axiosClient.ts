import { ApiKeys, ENV, StatusCodes } from "@/constants";
import { IBaseRes, IRefreshTokenPayload, TokenResponse } from "@/types";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const axiosClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const refreshService = async (payload: IRefreshTokenPayload) => {
  const response = await axios.post<IBaseRes<TokenResponse>>(
    `${ENV.API_BASE_URL}${ApiKeys.RefreshToken}`,
    payload
  );
  return response.data.data;
};

export default axiosClient;
