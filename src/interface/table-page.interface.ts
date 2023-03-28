import { IClub } from "./club.interface";
import { IArticle } from "./news.interface";

export interface ITablePage {
  clubs: IClub[];
  articles: IArticle[];
}
