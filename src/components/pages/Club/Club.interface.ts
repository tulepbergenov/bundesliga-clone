import { IArticle, IClub, IFootballer } from "@/src/interfaces";

export interface IClubPage {
  club: IClub;
  players: IFootballer[];
  articles: IArticle[];
}
