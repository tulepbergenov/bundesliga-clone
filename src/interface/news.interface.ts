export interface INewsResponse {
  data: IArticle[];
}

export interface IArticleResponse {
  data: IArticle;
}

export interface IArticle {
  id: number;
  title: string;
  short_description: string;
  long_description: string;
  image: any;
}
