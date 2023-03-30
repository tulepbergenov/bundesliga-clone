import { IClub } from "./club.interface";
import { IFootballer } from "./footballer.interface";
import { IArticle } from "./news.interface";

export interface IPlayerPageData {
  player: IFootballer;
  articles: IArticle[];
  club: IClub;
}
