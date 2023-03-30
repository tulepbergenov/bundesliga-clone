import { IFootballerResponse, IFootballersResponse } from "@/src/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getFootballers = (): Promise<AxiosResponse<IFootballersResponse>> =>
  api.get("/footballers");

const getFootballer = (
  id: number
): Promise<AxiosResponse<IFootballerResponse>> => api.get(`/footballers/${id}`);

export const footballerService = { getFootballers, getFootballer };
