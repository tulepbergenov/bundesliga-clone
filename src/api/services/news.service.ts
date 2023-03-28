import {
  IArticleResponse,
  INewsResponse,
} from "@/src/interface/news.interface";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getNews = (): Promise<AxiosResponse<INewsResponse>> =>
  api.get("/articles");

const getArticle = (id: number): Promise<AxiosResponse<IArticleResponse>> =>
  api.get(`/articles/${id}`);

export const newsService = {
  getNews,
  getArticle,
};
