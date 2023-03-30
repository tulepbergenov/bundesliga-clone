import { newsService } from "@/src/api";
import { NewsInnerPage as NewsInnerPageContent } from "@/src/components/pages";
import { INewsInnerPageData } from "@/src/interfaces";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const NewsInnerPage: NextPage<INewsInnerPageData> = ({ article, lastNews }) => {
  return (
    <>
      <Head>
        <title>{article.title} | Bundesliga</title>
      </Head>
      <NewsInnerPageContent article={article} lastNews={lastNews} />
    </>
  );
};

export const getStaticPaths: any = async ({ locales }: any) => {
  const res = await newsService.getNews();

  const paths = res.data.data
    .map((path) =>
      locales?.map((locale: any) => ({
        params: {
          id: path.id.toString(),
        },
        locale,
      }))
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<INewsInnerPageData> = async ({
  params,
  locale,
}) => {
  try {
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
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default NewsInnerPage;
