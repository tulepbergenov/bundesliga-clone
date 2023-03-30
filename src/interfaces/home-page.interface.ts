import { IClub } from "./club.interface";
import { IArticle } from "./news.interface";

export interface IHomePageData {
  articles: IArticle[];
  lastArticle: IArticle;
  clubs: IClub[];
}
