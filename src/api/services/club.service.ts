import { IClubResponse, IClubsResponse } from "@/src/interface";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getClubs = (): Promise<AxiosResponse<IClubsResponse>> =>
  api.get("/clubs");

const getClub = async (id: number): Promise<AxiosResponse<IClubResponse>> =>
  api.get(`/clubs/${id}`);

export const clubService = {
  getClubs,
  getClub,
};
