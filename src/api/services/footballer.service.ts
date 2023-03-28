import { IFootballerResponse, IFootballersResponse } from "@/src/interface";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getFootballers = (): Promise<AxiosResponse<IFootballersResponse>> =>
  api.get("/footballers");

const getFootballer = (
  id: number
): Promise<AxiosResponse<IFootballerResponse>> => api.get(`/footballer/${id}`);

export const footballerService = { getFootballers, getFootballer };
