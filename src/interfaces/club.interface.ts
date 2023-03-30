import { IFootballer } from "./footballer.interface";
import { IArticle } from "./news.interface";

export interface IClubsResponse {
  data: IClub[];
}

export interface IClubResponse {
  data: IClub;
}

export interface IClubs {
  clubs: IClub[];
}

export interface IClubData {
  club: IClub;
  players: IFootballer[];
  articles: IArticle[];
}

export interface IClub {
  id: number;
  name: string;
  stadium: string;
  short_name: string;
  color: string;
  win: string;
  draw: string;
  lose: string;
}
