import { IArticle } from "./news.interface";

export interface INewsInnerPageData {
  article: IArticle;
  lastNews: IArticle[];
}
