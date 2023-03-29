import { newsService } from "@/src/api";
import { NewsInnerPage as NewsInnerPageContent } from "@/src/components/pages";
import { INewsInnerPageData } from "@/src/interface";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

const NewsInnerPage: NextPage<INewsInnerPageData> = ({ article, lastNews }) => {
  return <NewsInnerPageContent article={article} lastNews={lastNews} />;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await newsService.getNews();

  const paths = res.data.data.map((path) => ({
    params: {
      id: path.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<INewsInnerPageData> = async ({
  params,
  locale,
}) => {
  const article = await newsService.getArticle(Number(params?.id));
  const articleData = await newsService.getNews();
  const articles = articleData.data.data;
  articles.reverse();
  const lastNews = articles.slice(0, 3);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common", "header"])),
      article: article.data.data,
      lastNews: lastNews,
    },
  };
};

export default NewsInnerPage;
